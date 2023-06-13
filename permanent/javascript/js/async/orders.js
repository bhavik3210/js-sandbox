"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoPromises = void 0;
const axios_1 = __importDefault(require("axios"));
const Util_1 = require("../Util");
const baseUrl = "http://localhost:8000";
const orders = `${baseUrl}/orders`;
const addresses = `${baseUrl}/addresses`;
const itemCategories = `${baseUrl}/itemCategories`;
const items = `${baseUrl}/items`;
const orderStatuses = `${baseUrl}/orderStatuses`;
const users = `${baseUrl}/users`;
const userTypes = `${baseUrl}/userTypes`;
function demoPromises() {
    // setupAxiosInterceptors();
    axios_1.default.get(orders).then((response) => {
        (0, Util_1.log)(JSON.stringify(response.data, null, 2));
    });
}
exports.demoPromises = demoPromises;
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
//# sourceMappingURL=orders.js.map