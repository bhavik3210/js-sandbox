import chalk from "chalk";
import { log as consoleLog } from "console";
import { AxiosResponse } from "axios";

const log = (output) => {
  consoleLog(output);
};

const notes = (message) => {
  consoleLog(chalk.gray`${message}\n`);
};

const output = (output) => {
  consoleLog(chalk.inverse`OUTPUT: ${output}\n`);
};

const h1 = (h1) => {
  consoleLog("\n");
  consoleLog(chalk.black.bgRed(`${"=".repeat(20)} ${h1} ${"=".repeat(20)}`));
};

const h2 = (h2) => {
  consoleLog(chalk.black.bgYellow(`${"-".repeat(5)} ${h2}  ${"-".repeat(5)}`));
};

const toJSON = (response: AxiosResponse<any, any>) => {
  if (response.status == 200) {
    const { data } = response;
    return JSON.stringify(data, null, 2);
  } else {
    return `Error occurred with, Response Code: ${response.status}`;
  }
};

export { log, notes, output, h1, h2, toJSON };
