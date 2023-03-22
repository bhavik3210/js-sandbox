import chalk from "chalk";
import { log as consoleLog } from "console";
import { AxiosResponse } from "axios";

export const log = (output) => {
  consoleLog(`${output}\n`);
};

export const notes = (message) => {
  consoleLog(chalk.gray`${message}\n`);
};

export const output = (output) => {
  consoleLog(chalk.inverse`OUTPUT: ${output}\n`);
};

export const h1 = (h1) => {
  consoleLog("\n");
  consoleLog(chalk.black.bgRed(`${"=".repeat(20)} ${h1} ${"=".repeat(20)}`));
};

export const h2 = (h2) => {
  consoleLog(chalk.black.bgYellow(`${"-".repeat(5)} ${h2}  ${"-".repeat(5)}`));
};

export const toJSON = (response: AxiosResponse<any, any>) => {
  if (response.status == 200) {
    const { data } = response;
    return JSON.stringify(data, null, 2);
  } else {
    return `Error occurred with, Response Code: ${response.status}`;
  }
};
