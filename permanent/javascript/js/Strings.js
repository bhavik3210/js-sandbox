"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("./Util");
/*
  Javascript Primitive types
  https://developer.mozilla.org/en-US/docs/Glossary/Primitive
  - String
  - number
  - bigint
  - boolean
  - undefined
  - symbol
  - null
*/
function demoStrings() {
    (0, Util_1.h1)("STRINGS");
    let firstName = "John";
    let lastName = "Doe";
    let title = `Title`;
    title = "New Title";
    (0, Util_1.h2)("Concatenation");
    let fullName = firstName + lastName;
    (0, Util_1.log)(fullName);
    fullName = `${firstName} ${lastName}`;
    (0, Util_1.log)(fullName);
    (0, Util_1.h2)("Multiline Strings");
    (0, Util_1.log)("Multi line \nstring \ngoes here");
}
exports.default = demoStrings;
//# sourceMappingURL=Strings.js.map