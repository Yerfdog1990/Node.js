// Import HTTP client
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/home') {
        res.end('Welcome to home page');
    }else if (req.url === '/about') {
        res.end('Welcome to out about page');
    }else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

// Listen on port 8080
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});