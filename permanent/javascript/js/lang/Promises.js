"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Util_1 = require("../util/Util");
const baseUrl = "http://localhost:8000";
const ordersApi = `${baseUrl}/orders`;
const addressesApi = `${baseUrl}/addresses`;
const itemCategoriesApi = `${baseUrl}/itemCategories`;
const itemsApi = `${baseUrl}/items`;
const orderStatusesApi = `${baseUrl}/orderStatuses`;
const usersApi = `${baseUrl}/users`;
const userTypesApi = `${baseUrl}/userTypes`;
const setupAxiosInterceptors = () => {
    axios_1.default.interceptors.request.use((request) => {
        console.log("Starting Request", JSON.stringify(request, null, 2));
        return request;
    });
    axios_1.default.interceptors.response.use((response) => {
        console.log("Response:", JSON.stringify(response.data, null, 2));
        return response;
    });
};
const demoSimplePromises = () => {
    (0, Util_1.h2)("Simple Promises");
    (0, Util_1.notes)(`
    Promises have three stages
    - Pending: Amount of time promise takes (i.e. 500 milliseconds to complete a network request)
    - Fulfilled: When promises has been completed its execution [.then() block]
    - Rejected: when promises has been completed its execution but with an error [.catch() block]
    - Note: there is also .finally() block which runs regardless of promise is fulfilled or rejected.
  `);
    axios_1.default.get(ordersApi).then((response) => {
        (0, Util_1.h2)("Promise: FULFILLED");
        (0, Util_1.log)((0, Util_1.toJSON)(response));
    });
    axios_1.default
        .get(`${ordersApi}/1000`)
        .then((response) => {
        (0, Util_1.h2)("Promise: FULFILLED");
        (0, Util_1.log)((0, Util_1.toJSON)(response));
    })
        .catch((error) => {
        (0, Util_1.h2)("Promise: REJECTED");
        (0, Util_1.log)(error.message);
    });
};
const demoChainingPromises = () => {
    let statuses = [];
    axios_1.default
        .get(`${orderStatusesApi}`)
        .then(({ data }) => {
        (0, Util_1.h2)("Promises Chaining");
        (0, Util_1.notes)(`
        This is valid
        promise.
          .then()
          .catch() only catches for top "then" function
          .then()
          .then()
          .catch() catches for any of the "then" functions and also catches in the first "catch" function
      `);
        statuses = data;
        (0, Util_1.log)(statuses);
        return axios_1.default.get(`${ordersApi}`);
    })
        .then(({ data }) => {
        (0, Util_1.h2)("Promises Chaining");
        let orders = data.map((order) => {
            let resultFound = statuses.find((searchResult) => searchResult.id === order.orderStatusId);
            let orderStatus = resultFound !== undefined ? resultFound.description : "UNKNOWN";
            return {
                ...order,
                orderStatus: orderStatus,
            };
        });
        (0, Util_1.log)(orders);
    })
        .catch((error) => {
        (0, Util_1.log)(error.message);
    })
        .finally(() => {
        (0, Util_1.h2)("COMPLETED PROMISE CHAINING SECTION");
    });
};
const demoQueuingPromisesAll = () => {
    let statusRequest = axios_1.default.get(orderStatusesApi);
    let addressRequest = axios_1.default.get(addressesApi);
    let statuses = [];
    let addresses = [];
    (0, Util_1.h2)("Queuing Promises .all([...])");
    (0, Util_1.notes)(`
    Order matters, Executed in the order that are added
    - All promise function will complete after either all promises are fulfilled or one(whichever doesn't matter the order) of them gets rejected
  
  `);
    Promise.all([statusRequest, addressRequest])
        .then(([statusResponse, addressResponse]) => {
        statuses = statusResponse.data;
        addresses = addressResponse.data;
        return axios_1.default.get(ordersApi);
    })
        .then(({ data }) => {
        let orders = data.map((order) => {
            const addressSearchResult = addresses.find((a) => a.id === order.shippingAddress);
            const address = addressSearchResult != undefined ? addressSearchResult : null;
            const orderSearchResult = statuses.find((s) => s.id === order.orderStatusId);
            const orderStatus = orderSearchResult != undefined
                ? orderSearchResult.description
                : "UNKNOWN";
            return {
                ...order,
                orderStatus: orderStatus,
                shippingAddress: `${address?.street} ${address?.city} ${address?.state} ${address?.zipcode}`,
            };
        });
        (0, Util_1.log)(orders);
    });
};
const demoQueuingPromisesAllSetteled = () => {
    let statusRequest = axios_1.default.get(orderStatusesApi);
    let addressRequest = axios_1.default.get(addressesApi);
    let addressTypeRequest = axios_1.default.get(`${baseUrl}/addressTypes`); // does not exist and should throw 404
    let statuses = [];
    let addresses = [];
    let addressesType = [];
    (0, Util_1.h2)("Queuing Promises .allSettled([...])");
    (0, Util_1.notes)(`
    - difference in the type of response returned object
    - data returned with allSettled has two props. {status: "fulfilled" | "rejected" , value: for fulfilled status | reason: for rejected status}
    - Catch is not needed but recommended just to make sure you catch
    any error that could potentially happen in .then 
  `);
    Promise.allSettled([statusRequest, addressRequest, addressTypeRequest])
        .then(([statusResponse, addressResponse, addressTypeResponse]) => {
        if (statusResponse.status === "fulfilled") {
            statuses = statusResponse.value.data;
        }
        else {
            (0, Util_1.log)("ERROR: could not retreive status response");
        }
        if (addressResponse.status === "fulfilled") {
            addresses = addressResponse.value.data;
        }
        else {
            (0, Util_1.log)("ERROR: could not retreive address response");
        }
        if (addressTypeResponse.status === "fulfilled") {
            addressesType = addressTypeResponse.value.data;
        }
        else {
            (0, Util_1.log)("ERROR: could not retreive address type response");
        }
        return axios_1.default.get(ordersApi);
    })
        .then(({ data }) => {
        let orders = data.map((order) => {
            const addressSearchResult = addresses.find((a) => a.id === order.shippingAddress);
            const address = addressSearchResult != undefined ? addressSearchResult : null;
            const orderSearchResult = statuses.find((s) => s.id === order.orderStatusId);
            const orderStatus = orderSearchResult != undefined
                ? orderSearchResult.description
                : "UNKNOWN";
            return {
                ...order,
                orderStatus: orderStatus,
                shippingAddress: `${address?.street} ${address?.city} ${address?.state} ${address?.zipcode}`,
            };
        });
        (0, Util_1.log)(orders);
    })
        .catch((error) => {
        (0, Util_1.log)(error);
    });
};
const demoSingleResponsePromise = () => {
    (0, Util_1.h2)("Queuing Promises .any([...]) and .race()");
    (0, Util_1.notes)(`
    any - first is fulfilled or all are rejected
    race - first is settled (fastest promise that is settled)
  `);
};
const demoCreatingPromises = () => {
    const pinkyPromise = new Promise((resolve, reject) => {
        let responseStatus = 200;
        if (responseStatus === 200) {
            resolve(`Promise is fulfilled with ${responseStatus}`);
        }
        else {
            reject(`Promise is rejected with ${responseStatus}`);
        }
    });
    pinkyPromise
        .then((data) => {
        (0, Util_1.log)(data);
    })
        .catch((error) => {
        (0, Util_1.log)(error);
    })
        .finally(() => {
        (0, Util_1.log)("PINKY PROMISE COMPLETED");
    });
    const brokenPromise = new Promise((resolve, reject) => {
        let responseStatus = 500;
        if (responseStatus === 200) {
            resolve(`Promise is fulfilled with ${responseStatus}`);
        }
        else {
            reject(`Promise is rejected with ${responseStatus}`);
        }
    });
    brokenPromise
        .then((data) => {
        (0, Util_1.log)(data);
    })
        .catch((error) => {
        (0, Util_1.log)(error);
    })
        .finally(() => {
        (0, Util_1.log)("BROKEN PROMISE COMPLETED");
    });
};
const demoSimpleAsyncAwait = async () => {
    (0, Util_1.h2)("Async/Await");
    const { data } = await axios_1.default.get(ordersApi);
    (0, Util_1.log)(data);
    (0, Util_1.h2)("Async/Await with Error");
    try {
        const { data } = await axios_1.default.get(`${ordersApi}/234`);
        (0, Util_1.log)(data);
    }
    catch (error) {
        (0, Util_1.log)(error.message);
    }
};
const demoAsyncAwaitChaining = async () => {
    (0, Util_1.h2)("Async-Await Chaining");
    try {
        let { data: statuses } = await axios_1.default.get(`${orderStatusesApi}`);
        let { data: orders } = await axios_1.default.get(`${ordersApi}`);
        (0, Util_1.log)(statuses);
        let ordersResult = orders.map((order) => {
            let resultFound = statuses.find((searchResult) => searchResult.id === order.orderStatusId);
            let orderStatus = resultFound !== undefined ? resultFound.description : "UNKNOWN";
            return {
                ...order,
                orderStatus: orderStatus,
            };
        });
        (0, Util_1.log)(ordersResult);
    }
    catch (error) {
        console.log(error.message);
    }
};
const demoAsyncAwaitConcurrent = async () => {
    (0, Util_1.h2)("Async-Await Concurrent Request Chaining");
    try {
        let statusesRequest = axios_1.default.get(`${orderStatusesApi}`);
        let ordersRequest = axios_1.default.get(`${ordersApi}`);
        const { data: statuses } = await statusesRequest;
        const { data: orders } = await ordersRequest;
        let ordersResult = orders.map((order) => {
            let resultFound = statuses.find((searchResult) => searchResult.id === order.orderStatusId);
            let orderStatus = resultFound !== undefined ? resultFound.description : "UNKNOWN"; // !resultFound equivalent
            return {
                ...order,
                orderStatus: orderStatus,
            };
        });
        (0, Util_1.log)(ordersResult);
    }
    catch (error) {
        console.log(error.message);
    }
};
async function demoAsyncFuncPromisesInParallelExecution() {
    await Promise.all([
        (async () => {
            const { data } = await axios_1.default.get(orderStatusesApi);
            (0, Util_1.log)("Order Status API call fetched");
            (0, Util_1.log)(data);
        })(),
        (async () => {
            const { data } = await axios_1.default.get(ordersApi);
            (0, Util_1.log)("Orders API call fetched");
            (0, Util_1.log)(data);
        })(),
    ]);
}
function demoPromises() {
    (0, Util_1.h1)("Promises");
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
exports.default = demoPromises;
//# sourceMappingURL=Promises.js.map
