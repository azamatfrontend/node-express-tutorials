// Modules
// CommonJS, every file is module (by default)
// Modules  - Encapsulated Code (only share minimum)

const names = require("./4-first-module.js");
const sayHi = require("./5-utils.js");

console.log(names);

// sayHi("Azamat");
// sayHi(john);
// sayHi(peter);

sayHi("Azamat");
sayHi(names.john);
sayHi(names.peter);