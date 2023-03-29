import { h1, h2, log, notes, output } from "../util/Util";
import { error } from "console";

/*
  Error Types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
*/

const demoBasicErrorHandlingWithTryCatch = () => {
  h2(`Basic error handling with Try Catch`);

  let month = undefined;

  try {
    if (!month) {
      throw Error("Month is undefined");
    }
  } catch (error: any) {
    log(error.message);
  } finally {
    log("FINALLY block ALWAYS RUNS if declared");
  }
};

const demoHandlingMultipleTypes1 = () => {
  h2(`Error handling with Try Catch with custom types 1`);

  let month: number | undefined = undefined;

  try {
    if (!month) {
      throw Error("Month is undefined");
    }

    // Note: once an error has been thrown try block will return and jump to catch block
    month = 13;
    if (month < 1 && month > 12) {
      throw RangeError("Month should be 1-12");
    }
  } catch (error: any) {
    log(error.message);
  }
};

const demoHandlingMultipleTypes2 = () => {
  h2(`Error handling with Try Catch with custom types 2`);

  let month = 13;
  try {
    if (!month) {
      throw Error("Month is undefined");
    }

    if (month < 1 || month > 12) {
      throw RangeError("Month should be 1-12");
    }
  } catch (error: any) {
    notes(`
      The reason why error type is any, because error type can vary based on what error type is thrown. 
      for ex, in this block, RangeError is thrown, therefore we cannot apply a strict type
    `);

    const errorMessage = error.message;

    switch (error) {
      case error instanceof Error:
        log(`Error Type: ${log(errorMessage)}`);
        break;
      case error instanceof RangeError:
        log(`RangeError Type: ${log(errorMessage)}`);
        break;
      default:
        log(error.message);
    }
  }
};

const demoMyCustomErrorType = () => {
  h2(`Error handling My Custom Error Type`);

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
  } catch (error: any) {
    const errorMessage = error.message;
    log(error.instanceof);
    switch (error) {
      case error instanceof Error:
        log(`Error Type: ${log(errorMessage)}`);
        break;
      case error instanceof MyCustomError:
        log(`MyCustomError Type: ${log(errorMessage)}`);
        break;
      default:
        log(errorMessage);
    }
  }
};

export default () => {
  // demoBasicErrorHandlingWithTryCatch();
  // demoHandlingMultipleTypes1();
  // demoHandlingMultipleTypes2();
  demoMyCustomErrorType(); //ISSUE: error type is not being casted and is undefined?
};

class MyCustomError extends Error {
  name: string;
  message: string;
  cause: any;

  constructor({
    name,
    message,
    cause,
  }: {
    name: string;
    message: string;
    cause?: any;
  }) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}
