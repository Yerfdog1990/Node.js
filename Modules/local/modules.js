// CommonJS, every file is a module by default.
// Modules - Encapsulated code (only share minimum)
/*
📚 Core Node.js Modules and Their Usage

1. fs (File System)
- Read/write files
- Manipulate directories
- Watch file changes
*/
const fs = require('fs');
// Example: Read file
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

/*
2. path
- Work with file paths
- Platform-independent path handling
*/
const path = require('path');
// Example: Join paths
const fullPath = path.join(__dirname, 'test.txt');

/*
3. http
- Create HTTP servers
- Make HTTP requests
*/
const http = require('http');
// Example: Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

/*
4. events
- Handle and emit custom events
*/
const EventEmitter = require('events');
// Example: Custom event
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('Event occurred!'));

/*
5. util
- Utility functions
- Debug and deprecation warnings
*/
const util = require('util');
// Example: Format strings
console.log(util.format('%s:%s', 'foo', 'bar'));

/*
6. crypto
- Cryptographic functionality
- Hashing, encryption
*/
const crypto = require('crypto');
// Example: Create hash
const hash = crypto.createHash('sha256').update('password').digest('hex');

/*
7. os
- Operating system related operations
*/
const os = require('os');
// Example: Get system info
console.log(`CPU Architecture: ${os.arch()}`);

/*
8. url
- URL parsing and formatting
*/
const url = require('url');
// Example: Parse URL
const myUrl = new URL('https://example.com/path');

/*
9. querystring
- Parse and format URL query strings
*/
const querystring = require('querystring');
// Example: Parse query string
const parsed = querystring.parse('foo=bar&baz=qux');

/*
10. stream
- Handle streaming data
*/
const stream = require('stream');
// Example: Create a readable stream
const readable = new stream.Readable({
    read() {
    }
});
