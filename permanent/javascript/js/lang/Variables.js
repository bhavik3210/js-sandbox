"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../util/Util");
function demoVariables() {
    (0, Util_1.h1)("VARIABLES");
    let variableName = "String Value";
    (0, Util_1.log)(variableName);
    variableName = "Reassigned String Value";
    (0, Util_1.log)(variableName);
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
exports.default = demoVariables;
//# sourceMappingURL=Variables.js.map