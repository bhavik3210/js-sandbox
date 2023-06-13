import { h1, h2, log, logList, notes, output } from "../util/Util";

export default () => {
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

  log(combinedArrays);
};

const demoRestParamenter = () => {
  const funcWithRestArguments = (...restArgs) => {
    log(restArgs);
  };

  notes(`
    funcWithRestArguments(10, 20, 30, 40, 50);
  `);
  funcWithRestArguments(10, 20, 30, 40, 50);

  notes(`
    funcWithRestArguments("S", "T", "R", "I", "N", "G", "S");
  `);
  funcWithRestArguments("S", "T", "R", "I", "N", "G", "S");

  notes(`
    funcWithRestArguments(
      { parent: { child: "child Obj 1" } },
      { parent: { child: "child Obj 2" } },
      { parent: { child: "child Obj 3" } },
      { parent: { child: "child Obj 4" } },
      { parent: { child: "child Obj 5" } }
    );
  `);

  funcWithRestArguments(
    { parent: { child: "child Obj 1" } },
    { parent: { child: "child Obj 2" } },
    { parent: { child: "child Obj 3" } },
    { parent: { child: "child Obj 4" } },
    { parent: { child: "child Obj 5" } }
  );

  const funcWithAdditionalRestArguments = (a, b, ...restArgs) => {
    log(restArgs);
  };

  notes(`

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

  funcWithAdditionalRestArguments(
    { parent: { child: "child Obj 1" } },
    { parent: { child: "child Obj 2" } },
    { parent: { child: "child Obj 3" } },
    { parent: { child: "child Obj 4" } },
    { parent: { child: "child Obj 5" } }
  );
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

  log(`list1: ${list1}`);
  log(`copyOfList1: ${copyOfList1}`);
  log(`copyOfList2UsingSlice: ${copyOfList2UsingSlice}`);

  log("");

  list1.push("😝");
  copyOfList1[0] = "😈";

  log(`list1: ${list1}`);
  log(`copyOfList1: ${copyOfList1}`);
  log(`copyOfList2UsingSlice: ${copyOfList2UsingSlice}`);

  log("");
}

function demoSimpleSpreadOperatorOnArrayOfObject() {
  let listOfComplexObjectName = [{ first: "John", last: "Doe" }];
  let copyOfComplextObject = [...listOfComplexObjectName];

  log(`listOfComplexObjectName:`);
  logList(listOfComplexObjectName);
  log("");

  log(`copyOfComplextObject`);
  logList(copyOfComplextObject);
  log("");

  listOfComplexObjectName[0] = { first: "Johnny", last: "Doe" };
  copyOfComplextObject.push({ first: "Jane", last: "Doe" });
  notes(`
    Spread operator only is good for shallow copy when being used with complex objects and not deeper copy IN JAVASCRIPT
    IN Typescript, is a deeper copy primitive AND object types
  `);

  log(`listOfComplexObjectName:`);
  logList(listOfComplexObjectName);
  log("");

  log(`copyOfComplextObject`);
  logList(copyOfComplextObject);
  log("");
}

function demoObjectLiteral() {
  let object = { first: "John", last: "Doe" };
  let object2 = { ...object };

  log(object);
  log(object2);
  log("");

  object.first = "Jane";

  log(object);
  log(object2);
  log("");
}
