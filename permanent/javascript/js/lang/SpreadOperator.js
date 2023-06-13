"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../util/Util");
exports.default = () => {
    // demoArrayConcatenation();
    // demoRestParamenter();
};
const demoArrayConcatenation = () => {
    const firstArray = [1, 2, 3];
    const secondArray = [4, 5, 6];
    const thirdArray = [7, 8, 9];
    const nthArray = [98, 99, 100];
    const combinedArrays = [
        ...firstArray,
        ...secondArray,
        22,
        33,
        44,
        ...thirdArray,
        ...nthArray,
    ];
    (0, Util_1.log)(combinedArrays);
};
const demoRestParamenter = () => {
    const funcWithRestArguments = (...restArgs) => {
        (0, Util_1.log)(restArgs);
    };
    (0, Util_1.notes)(`
    funcWithRestArguments(10, 20, 30, 40, 50);
  `);
    funcWithRestArguments(10, 20, 30, 40, 50);
    (0, Util_1.notes)(`
    funcWithRestArguments("S", "T", "R", "I", "N", "G", "S");
  `);
    funcWithRestArguments("S", "T", "R", "I", "N", "G", "S");
    (0, Util_1.notes)(`
    funcWithRestArguments(
      { parent: { child: "child Obj 1" } },
      { parent: { child: "child Obj 2" } },
      { parent: { child: "child Obj 3" } },
      { parent: { child: "child Obj 4" } },
      { parent: { child: "child Obj 5" } }
    );
  `);
    funcWithRestArguments({ parent: { child: "child Obj 1" } }, { parent: { child: "child Obj 2" } }, { parent: { child: "child Obj 3" } }, { parent: { child: "child Obj 4" } }, { parent: { child: "child Obj 5" } });
    const funcWithAdditionalRestArguments = (a, b, ...restArgs) => {
        (0, Util_1.log)(restArgs);
    };
    (0, Util_1.notes)(`

  const funcWithAdditionalRestArguments = (a, b, ...restArgs) => {
    log(restArgs);
  };

  NOTE: object 1 and object 2 got assigned to a, b respectively. 
  and rest of the arguments are assigned to restArgs array

  funcWithAdditionalRestArguments(
      { parent: { child: "child Obj 1" } },
      { parent: { child: "child Obj 2" } },
      { parent: { child: "child Obj 3" } },
      { parent: { child: "child Obj 4" } },
      { parent: { child: "child Obj 5" } }
    );
  `);
    funcWithAdditionalRestArguments({ parent: { child: "child Obj 1" } }, { parent: { child: "child Obj 2" } }, { parent: { child: "child Obj 3" } }, { parent: { child: "child Obj 4" } }, { parent: { child: "child Obj 5" } });
};
// const course = { course: { title: "initial" } };
// console.log(`INITIAL COURSE`);
// console.log(course);
// const course2 = { ...course, course: { title: "Title 2" } };
// console.log(`COURSE 2`);
// console.log(course2);
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
//# sourceMappingURL=SpreadOperator.js.map