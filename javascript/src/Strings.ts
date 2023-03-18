import { h1, h2, log } from "./Util";

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

export function demoStrings() {
  h1("STRINGS");
  let firstName = "John";
  let lastName = "Doe";
  let title = "Title";
  title = "New Title";

  h2("Concatenation");
  let fullName = firstName + lastName;
  log(fullName);
  fullName = `${firstName} ${lastName}`;
  log(fullName);

  h2("Multiline Strings");
  log("Multi line \nstring \ngoes here");
}
