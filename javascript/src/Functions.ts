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

    convertKilogramToPound(20)
  `);
  output(`${convertKilogramToPound(20)}`);
}

const demoFunctionExpression = function () {
  h2("Function Expression");
  let convertKilogramToPound = function (valueInKg) {
    return valueInKg * 2.2;
  };
  log(`
    let convertKilogramToPound = function (valueInKg) {
      return valueInKg * 2.2;
    };

    convertKilogramToPound(20)
  `);
  output(`${convertKilogramToPound(20)}`);
};

const demoArrowFunction = () => {
  h2("Arrow Function");
  notes(`
  - When you only have one parameter you can omit parenthesis
  `);
  let convertKilogramToPound = (valueInKg) => {
    return valueInKg * 2.2;
  };
  log(`
  let convertKilogramToPound = (valueInKg, secondParameter, third, etc) => {
    return valueInKg * 2.2;
  };

  OR 

  let convertKilogramToPound = valueInKg => {
    return valueInKg * 2.2;
  };

  convertKilogramToPound(20) 
  `);
  output(`${convertKilogramToPound(20)}`);
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

const demoFunctionDefaultParameters = () => {
  h2("Default Parameters");
  notes(`
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

  log(
    `createPersonLineItem("John", "Doe"); will return ${JSON.stringify(
      createPersonLineItem("John", "Doe")
    )}`
  );

  log(
    `createPersonLineItem("Jane", "Doe"; 100); will return ${JSON.stringify(
      createPersonLineItem("Jane", "Doe", 100)
    )}`
  );

  log(
    `createPersonLineItem("Jane", 100); will return ${JSON.stringify(
      createPersonLineItem("Jane", 100)
    )}`
  );
};

const demoFunctionWithArgumentsObject = () => {
  h2(`"arguments" object`);
  notes(`
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
  h2("Rest Parameters");
  notes(`
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

  log(
    `createPersonLineItem("John", "Doe"); will return ${JSON.stringify(
      createPersonLineItem("John", "Doe")
    )}`
  );

  log(
    `createPersonLineItem("Jane", "Doe"; 100); will return ${JSON.stringify(
      createPersonLineItem("Jane", "Doe", 100)
    )}`
  );

  log(
    `createPersonLineItem("Jane", 100); will return ${JSON.stringify(
      createPersonLineItem("Jane", 100)
    )}`
  );
};

const demoPassFunctionAsArgument = () => {
  h2("Pass Function as argument");

  const displayTime = () => {
    const time = new Date().toLocaleTimeString();
    log(time);
  };

  setInterval(displayTime, 1000);
};

const demoInstanceMethodsOfAnObjectInstance = () => {
  h2("Object Instance Methods");
  notes(
    `Methods are referred to functions that are sitting inside a class and can only be used with the instance of the object of that class

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
  
    output(flight.getFlightInfo());`
  );

  class FlightPlan {
    private flightId: string;
    protected flightCost: string;
    public flightName: string;

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
    set cost(value: string) {
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

  output(flight.getFlightInfo());
};

// todo add example code that show cases three scopes
const demoScopes = () => {
  notes(
    `Add examples show casing this three
    
    the three scopes. Global Scope, Function Scope and Block scope`
  );
};

const demoClosure = () => {
  h2("Object Instance Methods");
  notes(
    `Closure will retain the context/state of the environment that surrounds it  let closureBlock;

      

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


    `
  );

  let closureBlock;

  (() => {
    let numberOfPassengers = 100;
    const addPassenger = () => {
      numberOfPassengers++;
      log(numberOfPassengers);
    };
    closureBlock = addPassenger;
  })();

  closureBlock();
  closureBlock();
  closureBlock();
};

export function demoFunctions() {
  h1("Functions");
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
}
