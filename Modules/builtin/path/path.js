const path = require('path');

// Basic path methods examples
// Returns the last portion of a path (filename)
// Can also return filename without extension when second parameter is provided
const getBasename = (filepath) => {
    console.log('Basename:', path.basename(filepath));
    console.log('Basename without extension:', path.basename(filepath, path.extname(filepath)));
};

// Returns the directory name of a path
const getDirname = (filepath) => {
    console.log('Directory name:', path.dirname(filepath));
};

// Returns the file extension (including the dot) of a path
const getExtension = (filepath) => {
    console.log('File extension:', path.extname(filepath));
};

// Path manipulation examples
// Joins all given path segments together using the platform-specific separator
const joinPaths = (...paths) => {
    console.log('Joined path:', path.join(...paths));
};

// Resolves a sequence of paths into an absolute path
const resolvePaths = (...paths) => {
    console.log('Resolved path:', path.resolve(...paths));
};

// Normalizes a path by resolving '..' and '.' segments
const normalizePath = (filepath) => {
    console.log('Normalized path:', path.normalize(filepath));
};

// Path parsing examples
// Parses a path into an object with root, dir, base, ext, and name properties
const parsePath = (filepath) => {
    console.log('Parsed path:', path.parse(filepath));
};

// Returns a path string from an object with path properties (reverse of parse)
const formatPath = (pathObject) => {
    console.log('Formatted path:', path.format(pathObject));
};

// Usage examples
const filePath = '/home/user/documents/file.txt';
const pathSegments = ['home', 'user', 'documents', 'file.txt'];
const relativePath = '../documents/file.txt';

// Demonstrate basic methods
getBasename(filePath);
getDirname(filePath);
getExtension(filePath);

// Demonstrate path manipulation
joinPaths(...pathSegments);
resolvePaths(relativePath);
normalizePath(relativePath);

// Demonstrate path parsing
parsePath(filePath);
formatPath({
    root: '/',
    dir: '/home/user/documents',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
});

// Platform-specific path segment separator (/ on POSIX, \ on Windows)
console.log('Path separator:', path.sep);
// Platform-specific path delimiter (; on Windows, : on POSIX)
console.log('Path delimiter:', path.delimiter);

module.exports = {
    getBasename,
    getDirname,
    getExtension,
    joinPaths,
    resolvePaths,
    normalizePath,
    parsePath,
    formatPath
};