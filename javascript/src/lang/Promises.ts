import axios from "axios";
import { stat } from "fs";
import { h1, h2, log, notes, toJSON } from "../util/Util";

const baseUrl = "http://localhost:8000";
const ordersApi = `${baseUrl}/orders`;
const addressesApi = `${baseUrl}/addresses`;
const itemCategoriesApi = `${baseUrl}/itemCategories`;
const itemsApi = `${baseUrl}/items`;
const orderStatusesApi = `${baseUrl}/orderStatuses`;
const usersApi = `${baseUrl}/users`;
const userTypesApi = `${baseUrl}/userTypes`;

const setupAxiosInterceptors = () => {
  axios.interceptors.request.use((request) => {
    console.log("Starting Request", JSON.stringify(request, null, 2));
    return request;
  });

  axios.interceptors.response.use((response) => {
    console.log("Response:", JSON.stringify(response.data, null, 2));
    return response;
  });
};

const demoSimplePromises = () => {
  h2("Simple Promises");
  notes(`
    Promises have three stages
    - Pending: Amount of time promise takes (i.e. 500 milliseconds to complete a network request)
    - Fulfilled: When promises has been completed its execution [.then() block]
    - Rejected: when promises has been completed its execution but with an error [.catch() block]
    - Note: there is also .finally() block which runs regardless of promise is fulfilled or rejected.
  `);

  axios.get(ordersApi).then((response) => {
    h2("Promise: FULFILLED");
    log(toJSON(response));
  });

  axios
    .get(`${ordersApi}/1000`)
    .then((response) => {
      h2("Promise: FULFILLED");
      log(toJSON(response));
    })
    .catch((error) => {
      h2("Promise: REJECTED");
      log(error.message);
    });
};

const demoChainingPromises = () => {
  let statuses: OrderStatus[] = [];
  axios
    .get<OrderStatus[]>(`${orderStatusesApi}`)
    .then(({ data }) => {
      h2("Promises Chaining");
      notes(`
        This is valid
        promise.
          .then()
          .catch() only catches for top "then" function
          .then()
          .then()
          .catch() catches for any of the "then" functions and also catches in the first "catch" function
      `);
      statuses = data;
      log(statuses);
      return axios.get<Order[]>(`${ordersApi}`);
    })
    .then(({ data }) => {
      h2("Promises Chaining");
      let orders = data.map((order: Order) => {
        let resultFound = statuses.find(
          (searchResult) => searchResult.id === order.orderStatusId
        );
        let orderStatus =
          resultFound !== undefined ? resultFound.description : "UNKNOWN";
        return {
          ...order,
          orderStatus: orderStatus,
        };
      });
      log(orders);
    })
    .catch((error) => {
      log(error.message);
    })
    .finally(() => {
      h2("COMPLETED PROMISE CHAINING SECTION");
    });
};

const demoQueuingPromisesAll = () => {
  let statusRequest = axios.get<OrderStatus[]>(orderStatusesApi);
  let addressRequest = axios.get<Address[]>(addressesApi);

  let statuses: OrderStatus[] = [];
  let addresses: Address[] = [];

  h2("Queuing Promises .all([...])");
  notes(`
    Order matters, Executed in the order that are added
    - All promise function will complete after either all promises are fulfilled or one(whichever doesn't matter the order) of them gets rejected
  
  `);
  Promise.all([statusRequest, addressRequest])
    .then(([statusResponse, addressResponse]) => {
      statuses = statusResponse.data;
      addresses = addressResponse.data;
      return axios.get<Order[]>(ordersApi);
    })
    .then(({ data }) => {
      let orders = data.map((order: Order) => {
        const addressSearchResult = addresses.find(
          (a: Address) => a.id === order.shippingAddress
        );
        const address =
          addressSearchResult != undefined ? addressSearchResult : null;

        const orderSearchResult = statuses.find(
          (s: OrderStatus) => s.id === order.orderStatusId
        );
        const orderStatus =
          orderSearchResult != undefined
            ? orderSearchResult.description
            : "UNKNOWN";

        return {
          ...order,
          orderStatus: orderStatus,
          shippingAddress: `${address?.street} ${address?.city} ${address?.state} ${address?.zipcode}`,
        };
      });

      log(orders);
    });
};

const demoQueuingPromisesAllSetteled = () => {
  let statusRequest = axios.get<OrderStatus[]>(orderStatusesApi);
  let addressRequest = axios.get<Address[]>(addressesApi);
  let addressTypeRequest = axios.get<object[]>(`${baseUrl}/addressTypes`); // does not exist and should throw 404

  let statuses: OrderStatus[] = [];
  let addresses: Address[] = [];
  let addressesType: object[] = [];

  h2("Queuing Promises .allSettled([...])");
  notes(`
    - difference in the type of response returned object
    - data returned with allSettled has two props. {status: "fulfilled" | "rejected" , value: for fulfilled status | reason: for rejected status}
    - Catch is not needed but recommended just to make sure you catch
    any error that could potentially happen in .then 
  `);
  Promise.allSettled([statusRequest, addressRequest, addressTypeRequest])
    .then(([statusResponse, addressResponse, addressTypeResponse]) => {
      if (statusResponse.status === "fulfilled") {
        statuses = statusResponse.value.data;
      } else {
        log("ERROR: could not retreive status response");
      }

      if (addressResponse.status === "fulfilled") {
        addresses = addressResponse.value.data;
      } else {
        log("ERROR: could not retreive address response");
      }

      if (addressTypeResponse.status === "fulfilled") {
        addressesType = addressTypeResponse.value.data;
      } else {
        log("ERROR: could not retreive address type response");
      }

      return axios.get<Order[]>(ordersApi);
    })
    .then(({ data }) => {
      let orders = data.map((order: Order) => {
        const addressSearchResult = addresses.find(
          (a: Address) => a.id === order.shippingAddress
        );
        const address =
          addressSearchResult != undefined ? addressSearchResult : null;

        const orderSearchResult = statuses.find(
          (s: OrderStatus) => s.id === order.orderStatusId
        );
        const orderStatus =
          orderSearchResult != undefined
            ? orderSearchResult.description
            : "UNKNOWN";

        return {
          ...order,
          orderStatus: orderStatus,
          shippingAddress: `${address?.street} ${address?.city} ${address?.state} ${address?.zipcode}`,
        };
      });

      log(orders);
    })
    .catch((error) => {
      log(error);
    });
};

const demoSingleResponsePromise = () => {
  h2("Queuing Promises .any([...]) and .race()");
  notes(`
    any - first is fulfilled or all are rejected
    race - first is settled (fastest promise that is settled)
  `);
};

const demoCreatingPromises = () => {
  const pinkyPromise = new Promise((resolve, reject) => {
    let responseStatus = 200;
    if (responseStatus === 200) {
      resolve(`Promise is fulfilled with ${responseStatus}`);
    } else {
      reject(`Promise is rejected with ${responseStatus}`);
    }
  });

  pinkyPromise
    .then((data) => {
      log(data);
    })
    .catch((error) => {
      log(error);
    })
    .finally(() => {
      log("PINKY PROMISE COMPLETED");
    });

  const brokenPromise = new Promise((resolve, reject) => {
    let responseStatus = 500;
    if (responseStatus === 200) {
      resolve(`Promise is fulfilled with ${responseStatus}`);
    } else {
      reject(`Promise is rejected with ${responseStatus}`);
    }
  });

  brokenPromise
    .then((data) => {
      log(data);
    })
    .catch((error) => {
      log(error);
    })
    .finally(() => {
      log("BROKEN PROMISE COMPLETED");
    });
};

const demoSimpleAsyncAwait = async () => {
  h2("Async/Await");
  const { data } = await axios.get(ordersApi);
  log(data);

  h2("Async/Await with Error");
  try {
    const { data } = await axios.get(`${ordersApi}/234`);
    log(data);
  } catch (error: any) {
    log(error.message);
  }
};

const demoAsyncAwaitChaining = async () => {
  h2("Async-Await Chaining");

  try {
    let { data: statuses } = await axios.get<OrderStatus[]>(
      `${orderStatusesApi}`
    );

    let { data: orders } = await axios.get<Order[]>(`${ordersApi}`);

    log(statuses);

    let ordersResult = orders.map((order: Order) => {
      let resultFound = statuses.find(
        (searchResult) => searchResult.id === order.orderStatusId
      );
      let orderStatus =
        resultFound !== undefined ? resultFound.description : "UNKNOWN";
      return {
        ...order,
        orderStatus: orderStatus,
      };
    });

    log(ordersResult);
  } catch (error: any) {
    console.log(error.message);
  }
};

const demoAsyncAwaitConcurrent = async () => {
  h2("Async-Await Concurrent Requests Chaining");
  try {
    let statusesRequest = axios.get<OrderStatus[]>(`${orderStatusesApi}`);
    let ordersRequest = axios.get<Order[]>(`${ordersApi}`);

    const { data: statuses } = await statusesRequest;
    const { data: orders } = await ordersRequest;

    let ordersResult = orders.map((order: Order) => {
      let resultFound = statuses.find(
        (searchResult) => searchResult.id === order.orderStatusId
      );
      let orderStatus =
        resultFound !== undefined ? resultFound.description : "UNKNOWN"; // !resultFound equivalent
      return {
        ...order,
        orderStatus: orderStatus,
      };
    });

    log(ordersResult);
  } catch (error: any) {
    console.log(error.message);
  }
};

async function demoAsyncFuncPromisesInParallelExecution() {
  await Promise.all([
    (async () => {
      const { data } = await axios.get(orderStatusesApi);
      log("Order Status API call fetched");
      log(data);
    })(),
    (async () => {
      const { data } = await axios.get(ordersApi);
      log("Orders API call fetched");
      log(data);
    })(),
  ]);
}

export default function demoPromises() {
  h1("Promises");
  // demoSimplePromises();
  // demoChainingPromises();
  // demoQueuingPromisesAll();
  // demoQueuingPromisesAllSetteled();
  // demoSingleResponsePromise();
  // demoCreatingPromises();
  // demoSimpleAsyncAwait();
  // demoAsyncAwaitChaining();
  // demoAsyncAwaitConcurrent();
  // demoAsyncFuncPromisesInParallelExecution();
}

interface OrderStatus {
  id: number;
  description: string;
}

interface Order {
  id: number;
  orderStatusId: number;
  userId: number;
  shippingAddress: number;
  billingAddress: number;
  itemIds: number[];
}

interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}
