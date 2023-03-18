import { h1, h2, log, notes, output } from "./Util";

/*
  Functions
*/
function demoFunctionDeclaration() {
  h2("Function Declaration ");
  function convertKilogramToPound(valueInKg) {
    return valueInKg * 2.2;
  }
  log(`
    function convertKilogramToPound(valueInKg) {
      return valueInKg * 2.2;
    }
  `);
  output(`${convertKilogramToPound(20)}`);
}

const demoFunctionExpression = function () {
  h2("Function Expression");
  let convertKilogramToPound2 = function (valueInKg) {
    return valueInKg * 2.2;
  };
  log(`
    let convertKilogramToPound2 = function (valueInKg) {
      return valueInKg * 2.2;
    };

    convertKilogramToPound2(20) evaluates to ${convertKilogramToPound2(20)}
  `);
  output(`${convertKilogramToPound2(20)}`);
};

const demoArrowFunction = () => {
  h2("Arrow Function");
  notes(`
  - When you have only one parameter you can omit parenthesis
  `);
  let convertKilogramToPound3 = (valueInKg) => {
    return valueInKg * 2.2;
  };
  log(`
  let convertKilogramToPound3 = (valueInKg, secondParameter, third, etc) => {
    return valueInKg * 2.2;
  };

  OR 

  let convertKilogramToPound3 = valueInKg => {
    return valueInKg * 2.2;
  };

  convertKilogramToPound3(20) evaluates to 
  `);
  output(`${convertKilogramToPound3(20)}`);
};

const demoFunctionConstructor = () => {
  h2("Function Constructor");
  const convertToLiters4 = Function("valueInKg", "return valueInKg * 2.2");
  notes(`
    - You can create functions during runtime but is prone to errors and security risk. 
    - Don't Use it unless absolutely necessary.`);
  log(`
  const convertToLiters4 = Function("valueInKg", "return valueInKg * 2.2");
  `);
  output(`${convertToLiters4(20)}`);
};

const demoImmediateInvokeFunction = () => {
  h2("IIFE (Immediately Invoked Function Expression)");
  notes(`
    Two parts to this (PART-1)(PART-2)
    PART-1: Anonymous Function Declaration (Function that has no name/identifier is called Anonymous Function)
    PART-2: Invocation of the Anonymous Function (in Part 1) Immediately after it is declared
  `);
  (function () {
    return 20 * 2.2;
  })();

  (() => {
    return 20 * 2.2;
  })();

  log(`
    (function () {
      return 20 * 2.2;
    })();

    OR

    (() => {
      return 20 * 2.2;
    })();

    
  `);
  output(
    `${(() => {
      return 20 * 2.2;
    })()}`
  );
};

export function demoFunctions() {
  h1("Functions");
  demoFunctionDeclaration();
  demoFunctionExpression();
  demoArrowFunction();
  demoFunctionConstructor();
  demoImmediateInvokeFunction();
}
