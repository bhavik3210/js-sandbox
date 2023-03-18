import { h1, log } from "./Util";

export function demoVariables() {
  h1("VARIABLES");
  let variableName = "String Value";
  log(variableName);
  variableName = "Reassigned String Value";
  log(variableName);
  // variableName = 23;
  // log(variableName);

  // const constantVariable = "23";
  // log(constantVariable);
  // try {
  //   constantVariable = "212";
  // } catch (error) {
  //   log(`Constant Variables Cannot be reassigned \n ${error}`);
  // }
}
