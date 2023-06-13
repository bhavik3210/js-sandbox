"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../util/Util");
/*
  Functions
*/
function demoFunctionDeclaration() {
    (0, Util_1.h2)("Function Declaration ");
    function convertKilogramToPound(valueInKg) {
        return valueInKg * 2.2;
    }
    (0, Util_1.log)(`
    function convertKilogramToPound(valueInKg) {
      return valueInKg * 2.2;
    }

    convertKilogramToPound(20)
  `);
    (0, Util_1.output)(`${convertKilogramToPound(20)}`);
}
const demoFunctionExpression = function () {
    (0, Util_1.h2)("Function Expression");
    let convertKilogramToPound = function (valueInKg) {
        return valueInKg * 2.2;
    };
    (0, Util_1.log)(`
    let convertKilogramToPound = function (valueInKg) {
      return valueInKg * 2.2;
    };

    convertKilogramToPound(20)
  `);
    (0, Util_1.output)(`${convertKilogramToPound(20)}`);
};
const demoArrowFunction = () => {
    (0, Util_1.h2)("Arrow Function");
    (0, Util_1.notes)(`
  - When you only have one parameter you can omit parenthesis
  `);
    let convertKilogramToPound = (valueInKg) => {
        return valueInKg * 2.2;
    };
    (0, Util_1.log)(`
  let convertKilogramToPound = (valueInKg, secondParameter, third, etc) => {
    return valueInKg * 2.2;
  };

  OR 

  let convertKilogramToPound = valueInKg => {
    return valueInKg * 2.2;
  };

  convertKilogramToPound(20) 
  `);
    (0, Util_1.output)(`${convertKilogramToPound(20)}`);
};
const demoFunctionConstructor = () => {
    (0, Util_1.h2)("Function Constructor");
    const convertToLiters4 = Function("valueInKg", "return valueInKg * 2.2");
    (0, Util_1.notes)(`
    - You can create functions during runtime but is prone to errors and security risk. 
    - Don't Use it unless absolutely necessary.
    - however this is used internally when call something like 
    let convertToLiters4 = {} which calls convertToLiters4 = Function() internally
  `);
    (0, Util_1.log)(`
  const convertToLiters4 = Function("valueInKg", "return valueInKg * 2.2");
  `);
    (0, Util_1.output)(`${convertToLiters4(20)}`);
};
const demoImmediateInvokeFunction = () => {
    (0, Util_1.h2)("IIFE (Immediately Invoked Function Expression)");
    (0, Util_1.notes)(`
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
    (0, Util_1.log)(`
    (function () {
      return 20 * 2.2;
    })();

    OR

    (() => {
      return 20 * 2.2;
    })();

    
  `);
    (0, Util_1.output)(`${(() => {
        return 20 * 2.2;
    })()}`);
};
const demoFunctionDefaultParameters = () => {
    (0, Util_1.h2)("Default Parameters");
    (0, Util_1.notes)(`
  Primitive Data types are passed by value
  Object data types are passed by reference

  With default parameters, the order of the argument passed does matter as shown in the last example

  const createPersonLineItem = (firstName, lastName, age = 0) => {
    return new Object({ firstName: firstName, lastName: lastName, age: age });
  };
  `);
    const createPersonLineItem = (firstName, lastName, age = 0) => {
        return new Object({ firstName: firstName, lastName: lastName, age: age });
    };
    (0, Util_1.log)(`createPersonLineItem("John", "Doe"); will return ${JSON.stringify(createPersonLineItem("John", "Doe"))}`);
    (0, Util_1.log)(`createPersonLineItem("Jane", "Doe"; 100); will return ${JSON.stringify(createPersonLineItem("Jane", "Doe", 100))}`);
    (0, Util_1.log)(`createPersonLineItem("Jane", 100); will return ${JSON.stringify(createPersonLineItem("Jane", 100))}`);
};
const demoFunctionWithArgumentsObject = () => {
    (0, Util_1.h2)(`"arguments" object`);
    (0, Util_1.notes)(`
    - "arguments" is passed by default without being declared in the parameter in function declaration explicitly
    - in modern js use rest parameters instead of arguments object
    - arguments object is just a list that can take infinite amount of items with any type
    - since arguments object is a collection, it can be iterate over using any looping mechanism
    - arguments object is not available in arrow function
    - in general AVOID using this, and if you need it use Rest parameters [...restArgument]

    function createPersonLineItem() {
      return new Object({
        firstName: arguments[0],
        lastName: arguments[1],
        age: arguments[2],
      });
    }
  
    NOTE: Typescript won't even let me execute (calls below) the arguments object by default
    log(
      createPersonLineItem("John", "Doe"); will return \${JSON.stringify(
        createPersonLineItem("John", "Doe")
      )}
    );
  
    log(
      createPersonLineItem("Jane", "Doe"; 100); will return \${JSON.stringify(
        createPersonLineItem("Jane", "Doe", 100)
      )}
    );
  
    log(
      createPersonLineItem("Jane", 100); will return \${JSON.stringify(
        createPersonLineItem("Jane", 100)
      )}
    );
  `);
};
const demoFunctionWithRestParametersObject = () => {
    (0, Util_1.h2)("Rest Parameters");
    (0, Util_1.notes)(`
    const createPersonLineItem = (...personInfo) => {
      return new Object({
        firstName: personInfo[0],
        lastName: personInfo[1],
        age: personInfo[2],
      });
    };
  `);
    const createPersonLineItem = (...personInfo) => {
        return new Object({
            firstName: personInfo[0],
            lastName: personInfo[1],
            age: personInfo[2],
        });
    };
    (0, Util_1.log)(`createPersonLineItem("John", "Doe"); will return ${JSON.stringify(createPersonLineItem("John", "Doe"))}`);
    (0, Util_1.log)(`createPersonLineItem("Jane", "Doe"; 100); will return ${JSON.stringify(createPersonLineItem("Jane", "Doe", 100))}`);
    (0, Util_1.log)(`createPersonLineItem("Jane", 100); will return ${JSON.stringify(createPersonLineItem("Jane", 100))}`);
};
const demoPassFunctionAsArgument = () => {
    (0, Util_1.h2)("Pass Function as argument");
    const displayTime = () => {
        const time = new Date().toLocaleTimeString();
        (0, Util_1.log)(time);
    };
    setInterval(displayTime, 1000);
};
const demoInstanceMethodsOfAnObjectInstance = () => {
    (0, Util_1.h2)("Object Instance Methods");
    (0, Util_1.notes)(`Methods are referred to functions that are sitting inside a class and can only be used with the instance of the object of that class

    class FlightPlan {
      flightId: string;
      flightCost: string;
  
      constructor(flightId = "", flightCost = "") {
        this.flightId = flightId;
        this.flightCost = flightCost;
      }
  
      getFlightInfo() {
        return \`FlightID: \${this.flightId}, FlightCost: \${this.flightCost}\`;
      }

      // official getter syntax
      get flightInformation() {
        return \`FlightID: \${this.flightId}, \n        FlightCost: \${this.flightCost}   
      }
    }
  
    const flight = new FlightPlan("ASDF123", "$100");
  
    output(flight.getFlightInfo());`);
    class FlightPlan {
        constructor(flightId = "", flightCost = "", flightName = "") {
            this.flightId = flightId;
            this.flightCost = flightCost;
            this.flightName = flightName;
        }
        // Method syntax
        getFlightInfo() {
            return `FlightID: ${this.flightId}, \n        FlightCost: ${this.flightCost}   `;
        }
        // getter syntax
        get flightInformation() {
            return `FlightID: ${this.flightId}, \n        FlightCost: ${this.flightCost}   `;
        }
        // setter syntax
        set cost(value) {
            if (!value) {
                throw new Error("value must have amount");
            }
            this.flightCost = value;
        }
        // getter syntax
        get cost() {
            return this.flightCost;
        }
    }
    const flight = new FlightPlan("ASDF123", "$100");
    (0, Util_1.output)(flight.getFlightInfo());
};
// todo add example code that show cases three scopes
const demoScopes = () => {
    (0, Util_1.notes)(`Add examples show casing this three
    
    the three scopes. Global Scope, Function Scope and Block scope`);
};
const demoClosure = () => {
    (0, Util_1.h2)("Object Instance Methods");
    (0, Util_1.notes)(`Closure will retain the context/state of the environment that surrounds it  let closureBlock;

      

      (() => {
        let numberOfPassengers = 100;
        const addPassenger = () => {
          numberOfPassengers++;
          log(numberOfPassengers);
        };
        closureBlock = addPassenger;
      })();
    
      closureBlock(); This still has access to numberOfPassengers
      closureBlock();
      closureBlock();


    `);
    let closureBlock;
    (() => {
        let numberOfPassengers = 100;
        const addPassenger = () => {
            numberOfPassengers++;
            (0, Util_1.log)(numberOfPassengers);
        };
        closureBlock = addPassenger;
    })();
    closureBlock();
    closureBlock();
    closureBlock();
};
function demoMysteryOfThisKeywordAndItsContext() {
    (0, Util_1.h2)(`"this" keyword and its meaning`);
    (0, Util_1.notes)(`
    "this"
    1. in NON-ARROW functions, "this" usually represents the object invoking the function. 
    2. in ARROW functions, "this" refers to the parent function's scope

    For example, for 1
    "this" - Global Context
    At the top level of a script, "this" refers to the global context
    - Window object in HTML on a web page (https://developer.mozilla.org/en-US/docs/Web/API/Window Window object refer to this in HTML web page context)
    - Global in Node (https://nodejs.org/api/globals.html these are all global object in node)

    "use strict" will make "this" unusable because it will make it undefined
    in Typescript, if you have "strict": true, it will not let you use this and apply "use strict" rule everywhere in the project, to avoid any potentials bugs/issues during runtime of inference because this mode changes its behavior and context based on where you run it. 

    NOTE: In this mode to run the below code, "strict" needs to be set to false to be able to run. if strict mode is set to true the typescript compiler will complain. 

    function printThis() {
      log(this);
    }
    printThis();

    in typescript when strict flag is true it is equivalent to below code
    
    function printThis() {
      "use strict"
      log(this);
    }
  `);
    (0, Util_1.h2)(`"this" keyword and its meaning in methods`);
    (0, Util_1.notes)(`
    In methods, this keyword refers to the object it is part of. 
    During execution of that instance of that object, it will members' this keyword 
    will refer to the object itself. 
  `);
    (0, Util_1.h2)(`"this" keyword and its meaning in Arrow Functions`);
    (0, Util_1.notes)(`
    In arrow functions, this keyword refers to the context of what it is surrounded with. 

    Arrow functions are not suitable for methods in a class/object

    let aircraft = {
      model: "Airbus A330",
      capacity: 350,

      function printA() {
        console.log(this);
      }

      printB: () => {
        console.log(this);
      },
    };
    aircraft.printA(); will be aircraft Instance {model: "Airbus A330", capacity: 350}
    aircraft.printB(); will be window object if run in web or global in node runtime


    Class Example below and why does it work?
    Under the hood, a class is simply a constructor function underneath. 

    class Aircraft {
      model: string;
      capacity: number;
  
      constructor(model, capacity) {
        this.model = model;
        this.capacity = capacity;
      }
  
      print = () => {
        console.log(this.model);
      };
    }
    const b737 = new Aircraft("Boeing 737", 190);
    b737.print();


    class code above is equivalent to 

    function Aircraft(model, capacity) {
      this.model = model;
      this.capacity = capacity;

      this.print = () => {
        // "this" keyword here even though it is in arrow function, 
        refers to the surrounding context which is the constructor function Aircraft
        and this is why it works even though it is an arrow function, in class
        console.log(this.model);
      }
    }
  `);
    class Aircraft {
        constructor(model, capacity) {
            this.print = () => {
                console.log(this.model);
            };
            this.model = model;
            this.capacity = capacity;
        }
    }
    const b737 = new Aircraft("Boeing 737", 190);
    b737.print();
    (0, Util_1.h2)(`controlling the value of "this" with .bind() .call() .apply()`);
    (0, Util_1.notes)(`
    function alertPassenger(name) {
      console.log(\`\${name}: \${this.message}\`);
    }

    const presentToGateWarning = {
      message: \`message\`,
      priority: 1,
    };

    alertPassenger.call(presentToGateWarning, "John Doe"); //output: "John Doe: message"

    //how to use .bind
    const jd = alertPassenger.bind(presentToGateWarning, "John Doe with Bind");
    jd(); //this is required when using bind
  `);
}
function demoFunctions() {
    (0, Util_1.h1)("Functions");
    // demoFunctionDeclaration();
    // demoFunctionExpression();
    // demoArrowFunction();
    // demoFunctionConstructor();
    // demoImmediateInvokeFunction();
    // demoFunctionDefaultParameters();
    // demoFunctionWithArgumentsObject();
    // demoFunctionWithRestParametersObject();
    // demoPassFunctionAsArgument();
    // demoInstanceMethodsOfAnObjectInstance();
    // demoClosure();
    // demoMysteryOfThisKeywordAndItsContext();
}
exports.default = demoFunctions;
//# sourceMappingURL=Functions.js.map