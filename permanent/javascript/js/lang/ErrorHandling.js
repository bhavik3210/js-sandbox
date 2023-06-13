"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../util/Util");
/*
  Error Types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
*/
const demoBasicErrorHandlingWithTryCatch = () => {
    (0, Util_1.h2)(`Basic error handling with Try Catch`);
    let month = undefined;
    try {
        if (!month) {
            throw Error("Month is undefined");
        }
    }
    catch (error) {
        (0, Util_1.log)(error.message);
    }
    finally {
        (0, Util_1.log)("FINALLY block ALWAYS RUNS if declared");
    }
};
const demoHandlingMultipleTypes1 = () => {
    (0, Util_1.h2)(`Error handling with Try Catch with custom types 1`);
    let month = undefined;
    try {
        if (!month) {
            throw Error("Month is undefined");
        }
        // Note: once an error has been thrown try block will return and jump to catch block
        month = 13;
        if (month < 1 && month > 12) {
            throw RangeError("Month should be 1-12");
        }
    }
    catch (error) {
        (0, Util_1.log)(error.message);
    }
};
const demoHandlingMultipleTypes2 = () => {
    (0, Util_1.h2)(`Error handling with Try Catch with custom types 2`);
    let month = 13;
    try {
        if (!month) {
            throw Error("Month is undefined");
        }
        if (month < 1 || month > 12) {
            throw RangeError("Month should be 1-12");
        }
    }
    catch (error) {
        (0, Util_1.notes)(`
      The reason why error type is any, because error type can vary based on what error type is thrown. 
      for ex, in this block, RangeError is thrown, therefore we cannot apply a strict type
    `);
        const errorMessage = error.message;
        switch (error) {
            case error instanceof Error:
                (0, Util_1.log)(`Error Type: ${(0, Util_1.log)(errorMessage)}`);
                break;
            case error instanceof RangeError:
                (0, Util_1.log)(`RangeError Type: ${(0, Util_1.log)(errorMessage)}`);
                break;
            default:
                (0, Util_1.log)(error.message);
        }
    }
};
const demoMyCustomErrorType = () => {
    (0, Util_1.h2)(`Error handling My Custom Error Type`);
    let month = 13;
    try {
        if (!month) {
            throw Error("Month is undefined");
        }
        if (month < 1 || month > 12) {
            throw new MyCustomError({
                name: "MyCustomError",
                message: "Month should be 1-12",
            });
        }
    }
    catch (error) {
        const errorMessage = error.message;
        (0, Util_1.log)(error.instanceof);
        switch (error) {
            case error instanceof Error:
                (0, Util_1.log)(`Error Type: ${(0, Util_1.log)(errorMessage)}`);
                break;
            case error instanceof MyCustomError:
                (0, Util_1.log)(`MyCustomError Type: ${(0, Util_1.log)(errorMessage)}`);
                break;
            default:
                (0, Util_1.log)(errorMessage);
        }
    }
};
exports.default = () => {
    // demoBasicErrorHandlingWithTryCatch();
    // demoHandlingMultipleTypes1();
    // demoHandlingMultipleTypes2();
    demoMyCustomErrorType(); //ISSUE: error type is not being casted and is undefined?
};
class MyCustomError extends Error {
    constructor({ name, message, cause, }) {
        super();
        this.name = name;
        this.message = message;
        this.cause = cause;
    }
}
//# sourceMappingURL=ErrorHandling.js.map