const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative');
require('./withoutexport');
console.log(names);
sayHi(names.john);
sayHi(names.peter);
sayHi("yerfdog");
console.log(data);
