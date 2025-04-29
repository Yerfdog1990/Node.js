const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
   if (req.method === "POST" && req.url === "/save"){
       let body = '';
       req.on('data', (chunk) => {
           body += chunk.toString();
       })
       req.on('end', () => {
           res.statusCode = 200;
           res.setHeader([
               'ConTent-Length', '123456',
               'content-LENGTH', '123',
               'content-type', 'text/plain',
               'CONNECTION', 'keep-alive',
               'Host', 'example.com',
               'accepT', '*/*'
           ]);
           res.end(`Here is the user data saved: ${body}`)
       })
   }else if (req.method === "GET" && req.url === "/dashboard") {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Welcome to the user dashboard');
   }else {
       res.statusCode = 404;
       res.end('Page not found');
   }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});