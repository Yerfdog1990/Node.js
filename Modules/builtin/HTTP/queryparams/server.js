const http = require('http');
const url = require('url');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;

    // Parse the URL
    const parsedUrl = url.parse(req.url, true);

    // Path name
    const pathName = parsedUrl.pathname;

    // Query parameters
    const queryParams = parsedUrl.query;

    if (pathName === '/') {
        res.end(`Welcome to home page. Your query value is ${queryParams.H} ${queryParams.value} ${queryParams.v}`);
    } else if(pathName === '/about') {
        res.end(`Welcome to about page. Your query value is ${queryParams.H} ${queryParams.value} ${queryParams.v} and my name is ${queryParams.name}`);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

