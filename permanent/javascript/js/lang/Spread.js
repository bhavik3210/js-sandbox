"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../util/Util");
function demoSimpleSpreadOperatorOnArray() {
    let list1 = ["😉", "😊", "😇"];
    let copyOfList1 = [...list1];
    let copyOfList2UsingSlice = list1.slice(0);
    (0, Util_1.log)(`list1: ${list1}`);
    (0, Util_1.log)(`copyOfList1: ${copyOfList1}`);
    (0, Util_1.log)(`copyOfList2UsingSlice: ${copyOfList2UsingSlice}`);
    (0, Util_1.log)("");
    list1.push("😝");
    copyOfList1[0] = "😈";
    (0, Util_1.log)(`list1: ${list1}`);
    (0, Util_1.log)(`copyOfList1: ${copyOfList1}`);
    (0, Util_1.log)(`copyOfList2UsingSlice: ${copyOfList2UsingSlice}`);
    (0, Util_1.log)("");
}
function demoSimpleSpreadOperatorOnArrayOfObject() {
    let listOfComplexObjectName = [{ first: "John", last: "Doe" }];
    let copyOfComplextObject = [...listOfComplexObjectName];
    (0, Util_1.log)(`listOfComplexObjectName:`);
    (0, Util_1.logList)(listOfComplexObjectName);
    (0, Util_1.log)("");
    (0, Util_1.log)(`copyOfComplextObject`);
    (0, Util_1.logList)(copyOfComplextObject);
    (0, Util_1.log)("");
    listOfComplexObjectName[0] = { first: "Johnny", last: "Doe" };
    copyOfComplextObject.push({ first: "Jane", last: "Doe" });
    (0, Util_1.notes)(`
    Spread operator only is good for shallow copy when being used with complex objects and not deeper copy IN JAVASCRIPT
    IN Typescript, is a deeper copy primitive AND object types
  `);
    (0, Util_1.log)(`listOfComplexObjectName:`);
    (0, Util_1.logList)(listOfComplexObjectName);
    (0, Util_1.log)("");
    (0, Util_1.log)(`copyOfComplextObject`);
    (0, Util_1.logList)(copyOfComplextObject);
    (0, Util_1.log)("");
}
function demoObjectLiteral() {
    let object = { first: "John", last: "Doe" };
    let object2 = { ...object };
    (0, Util_1.log)(object);
    (0, Util_1.log)(object2);
    (0, Util_1.log)("");
    object.first = "Jane";
    (0, Util_1.log)(object);
    (0, Util_1.log)(object2);
    (0, Util_1.log)("");
}
function demoSpreadOperator() {
    // demoSimpleSpreadOperatorOnArray();
    // demoSimpleSpreadOperatorOnArrayOfObject();
    demoObjectLiteral();
}
exports.default = demoSpreadOperator;
//# sourceMappingURL=Spread.js.map