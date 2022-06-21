var imported = require('./module_eg_module');

console.log(imported.counter([1,2,3]));
console.log(imported.adder(3,6));
console.log(imported.adder(imported.pi,3));