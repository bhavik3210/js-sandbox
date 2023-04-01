import {
  demoVariables,
  demoStrings,
  demoFunctions,
  demoPromises,
  demoSpreadOperator,
  demoErrorHandling,
} from "./lang/";

// demoPromises();
const course = { course: { title: "initial" } };
console.log(`INITIAL COURSE`);
console.log(course);

const course2 = { ...course, course: { title: "Title 2" } };
console.log(`COURSE 2`);
console.log(course2);
