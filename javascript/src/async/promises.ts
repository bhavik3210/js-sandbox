import axios from "axios";
import { stat } from "fs";
import { h1, h2, log, notes, toJSON } from "../Util";

const baseUrl = "http://localhost:8000";
const orders = `${baseUrl}/orders`;
const addresses = `${baseUrl}/addresses`;
const itemCategories = `${baseUrl}/itemCategories`;
const items = `${baseUrl}/items`;
const orderStatuses = `${baseUrl}/orderStatuses`;
const users = `${baseUrl}/users`;
const userTypes = `${baseUrl}/userTypes`;

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

export function demoPromises() {
  // setupAxiosInterceptors();

  h1("Promises");
  notes(`
    Promises have three stages
    - Pending: Amount of time promise takes (i.e. 500 milliseconds to complete a network request)
    - Fulfilled: When promises has been completed its execution 
    - Rejected: when promises has been completed its execution but with an error
  `);

  axios.get(orders).then((response) => {
    h2("Promise: FULFILLED");
    log(toJSON(response));
  });

  axios
    .get(`${orders}/1000`)
    .then((response) => {
      h2("Promise: FULFILLED");
      log(toJSON(response));
    })
    .catch((err) => {
      h2("Promise: REJECTED");
      log(err);
    });

  let statuses: OrderStatus[] = [];
  axios
    .get<OrderStatus[]>(`${orderStatuses}`)
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
      return axios.get<Order[]>(`${orders}`);
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
}

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
