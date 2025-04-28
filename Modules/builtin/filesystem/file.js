/**
 * This module demonstrates various Node.js File System (fs) operations
 * including file reading/writing, directory operations, and file metadata handling
 */
const fs = require('fs');

// Create a file
// Define the name of the file we'll be working with throughout the examples
const fileName = 'example.txt';

// Create example.txt with initial content
fs.writeFile(fileName, 'Hello, this is example content', err => {
    if (err) {
        console.error('Error creating file:', err.message);
        return;
    }
    console.log('File created');
});

// File reading methods
try {
    console.log('Reading file synchronously:',
        fs.readFileSync(fileName, 'utf8'));
} catch (error) {
    console.error('Error reading file:', error.message);
}

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file asynchronously:', err.message);
        return;
    }
    console.log('Reading file asynchronously:', data);
});

// File Writing Methods
fs.writeFileSync('output.txt', 'Hello World');
console.log('File written synchronously');

fs.writeFile('output.txt', 'Hello Async World', (err) => {
    console.log('File written asynchronously');
});

// File Information Methods
console.log('File stats:',
    fs.statSync(fileName));

console.log('File exists:',
    fs.existsSync(fileName));

// Directory Methods
console.log('Directory contents:',
    fs.readdirSync('./'));

fs.mkdirSync('newDir', {recursive: true});
console.log('Directory created');

// Create the source file first
// Import the promises API for modern async/await file operations
const fs_promises = require('fs').promises;

// Demonstrates file creation and renaming using async/await
async function createAndRenameFile() {
    try {
        await fs_promises.writeFile('oldFile.txt', 'This is some content');
        console.log('File created');

        await fs_promises.rename('oldFile.txt', 'newFile.txt');
        console.log('File renamed successfully');
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('Source file does not exist');
        } else {
            console.error('Error during file operation:', error.message);
        }
    }
}

createAndRenameFile();

try {
    if (fs.existsSync('toDelete.txt')) {
        fs.unlinkSync('toDelete.txt');
        console.log('File deleted');
    }
} catch (error) {
    console.error('Error deleting file:', error.message);
}

// File Descriptor Methods - Demonstrate low-level file operations
// Open file and get a file descriptor for read-only access
const fd = fs.openSync(fileName, 'r');
console.log('File descriptor:', fd);
// Close the file descriptor to free up system resources
fs.closeSync(fd);
console.log('File descriptor closed');

// Stream Methods - Demonstrate efficient handling of large files
// Create a readable stream for reading large files in chunks
const readStream = fs.createReadStream(fileName);
console.log('Read stream created:', readStream.path);

// Create a writable stream for writing large amounts of data
const writeStream = fs.createWriteStream('output.txt');
console.log('Write stream created:', writeStream.path);

// Watching Methods - Monitor file changes
// Watch the file for changes and log the modification time
fs.watchFile(fileName, (curr, prev) => {
    console.log('File changed:', curr.mtime);
});

// Permissions Methods - Modify file access permissions
// Change file permissions to read/write for all users (666 in octal)
fs.chmodSync(fileName, 0o666);
console.log('File permissions changed');

// Symbolic Link Methods - Create and manage symbolic links (shortcuts)
// Create a target file and a symbolic link pointing to it
try {
    fs.writeFileSync('target.txt', 'Target file content');
    if (!fs.existsSync('link.txt')) {
        fs.symlinkSync('target.txt', 'link.txt');
        console.log('Symlink created');
    }
    console.log('Symlink target:',
        fs.readlinkSync('link.txt'));
} catch (error) {
    console.error('Error with symlink operations:', error.message);
}
