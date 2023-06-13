"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJSON = exports.h2 = exports.h1 = exports.output = exports.notes = exports.logList = exports.log = void 0;
const chalk_1 = __importDefault(require("chalk"));
const console_1 = require("console");
const log = (output) => {
    (0, console_1.log)(output);
};
exports.log = log;
const logList = (output) => {
    for (let i = 0; i < output.length; i++) {
        (0, console_1.log)(output[i]);
    }
};
exports.logList = logList;
const notes = (message) => {
    (0, console_1.log)(chalk_1.default.gray `${message}\n`);
};
exports.notes = notes;
const output = (output) => {
    (0, console_1.log)(chalk_1.default.inverse `OUTPUT: ${output}\n`);
};
exports.output = output;
const h1 = (h1) => {
    (0, console_1.log)("\n");
    (0, console_1.log)(chalk_1.default.black.bgRed(`${"=".repeat(20)} ${h1} ${"=".repeat(20)}`));
};
exports.h1 = h1;
const h2 = (h2) => {
    (0, console_1.log)(chalk_1.default.black.bgYellow(`${"-".repeat(5)} ${h2}  ${"-".repeat(5)}`));
};
exports.h2 = h2;
const toJSON = (response) => {
    if (response.status == 200) {
        const { data } = response;
        return JSON.stringify(data, null, 2);
    }
    else {
        return `Error occurred with, Response Code: ${response.status}`;
    }
};
exports.toJSON = toJSON;
//# sourceMappingURL=Util.js.map