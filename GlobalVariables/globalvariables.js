/*
🌍 Global Variables and Objects in Node.js

Global	Meaning / Usage
__dirname: The absolute path of the directory containing the currently executing file.
__filename: The absolute path of the currently executing file including the file name.
exports: An object used to export functions/variables from a module.
module:	Represents the current module (with details like exports, id, filename, etc.).
require: A function to import modules (built-in, local, or third-party).
process: An object that provides info and control over the current Node.js process.
global:	The global object in Node.js (like window in browsers).
Buffer:	A class to handle binary data directly in memory (e.g., file data, TCP streams).
setImmediate():	Schedules a callback function to run immediately after the current event loop phase.
clearImmediate(): Cancels an immediate action set with setImmediate().
setInterval(): Repeats a function after every given milliseconds.
clearInterval(): Cancels a timer set with setInterval().
setTimeout(): Runs a function once after a given number of milliseconds.
clearTimeout(): Cancels a timer set with setTimeout().
*/

//✨ Short Definitions and Examples
// 1. __dirname: 📜 Path of the current folder.
// Example:
console.log(__dirname); // Output: /Users/yourname/my-project
// 2. __filename: 📜 Path + file name.
// Example:
console.log(__filename); // Output: /Users/yourname/my-project/app.js
// 3. exports: ✈️ Used to share functions or objects from a file.
// Example (math.js):
exports.add = (a, b) => a + b;
// 4. module: 📦 Info about the current module.
//Example:
console.log(module);
//(Shows an object with info about the file.)
// 5. require: 📚 Import built-in or your own modules.
//Example:
const fs = require('fs');
//6. process: ⚙️ Info about the Node.js process (env vars, arguments, exit, etc.)
//Example:
console.log(process.version);
// 7. global: 🌎 Global object where you can attach variables manually.
//Example:
global.x = 5;
console.log(x); // 5
// 8. Buffer: 📦 Handle binary data (like file contents, streams).
//Example:
const buf = Buffer.from('Hello');
console.log(buf);
// 9. setImmediate(callback) ⏩ Run a callback right after the current event loop phase.
//Example:
setImmediate(() => console.log('Runs immediately'));
// 10. setInterval(callback, ms): 🔁 Repeat a function every ms milliseconds.
//Example:
setInterval(() => console.log('Tick'), 1000);
// 11. setTimeout(callback, ms): ⏲️ Run a function once after ms milliseconds.
//Example:
setTimeout(() => console.log('Runs after 2 seconds'), 2000);