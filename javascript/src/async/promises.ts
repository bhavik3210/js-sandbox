import axios from "axios";
import { stat } from "fs";
import { h1, h2, log, notes, toJSON } from "../Util";

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
  h1("Promises");
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
    .catch((err) => {
      h2("Promise: REJECTED");
      log(err);
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
      console.log(statuses);
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
      console.log(orders);
    })
    .catch((error) => {
      console.log(error);
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

      console.log(orders);
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
        console.log("ERROR: could not retreive status response");
      }

      if (addressResponse.status === "fulfilled") {
        addresses = addressResponse.value.data;
      } else {
        console.log("ERROR: could not retreive address response");
      }

      if (addressTypeResponse.status === "fulfilled") {
        addressesType = addressTypeResponse.value.data;
      } else {
        console.log("ERROR: could not retreive address type response");
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

      console.log(orders);
    })
    .catch((error) => {
      console.log(error);
    });
};

const demoAny = () => {};

const demoSingleResponsePromise = () => {
  h2("Queuing Promises .any([...]) and .race()");
  notes(`
    any - first is fulfilled or all are rejected
    race - first is settled (fastest promise that is settled)
  `);
};

export function demoPromises() {
  // setupAxiosInterceptors();
  // demoSimplePromises();
  // demoChainingPromises();
  // demoQueuingPromisesAll();
  // demoQueuingPromisesAllSetteled();
  demoSingleResponsePromise();
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
