const os = require('Modules/builtin/os/os');

//1. Info about the current user
// Returns information about the currently effective user: username, uid, gid, shell, homedir
console.log('User info:', os.userInfo());

//2. System CPU information
// Returns the operating system CPU architecture (x64, arm, ia32)
console.log('CPU Architecture:', os.arch());
// Returns an array of objects containing information about each logical CPU core
console.log('CPU Info:', os.cpus());
// Returns the number of logical CPU cores available
console.log('CPU Cores:', os.cpus().length);

//3. Memory information
// Returns the total system memory in bytes
console.log('Total Memory:', os.totalmem());
// Returns the amount of free system memory in bytes
console.log('Free Memory:', os.freemem());

//4. Network interfaces
// Returns an object containing network interfaces that have been assigned a network address
console.log('Network Interfaces:', os.networkInterfaces());

//5. Operating System information
// Returns the operating system platform (win32, darwin, linux)
console.log('OS Platform:', os.platform());
// Returns the operating system name (Linux, Darwin, Windows_NT)
console.log('OS Type:', os.type());
// Returns the operating system release version
console.log('OS Release:', os.release());
// Returns a string identifying the operating system version
console.log('OS Version:', os.version());
// Returns the hostname of the operating system
console.log('Host Name:', os.hostname());

//6. System directories and paths
// Returns the home directory path of the current user
console.log('Home Directory:', os.homedir());
// Returns the operating system's default directory for temporary files
console.log('Temp Directory:', os.tmpdir());
// Returns the operating system-specific end-of-line marker
console.log('End Of Line:', JSON.stringify(os.EOL));

//7. System uptime and load
// Returns the system uptime in seconds
console.log('System Uptime:', os.uptime());
// Returns an array containing the 1, 5, and 15 minute load averages
console.log('Load Averages:', os.loadavg());