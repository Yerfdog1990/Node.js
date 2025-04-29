/**
 * A simple HTTP server simulating a restaurant order system.
 * Handles requests for different food items and sends appropriate responses.
 */
const http = require('http');

// Create an HTTP server to handle incoming requests
const server = http.createServer((req, res) => {
    // Log incoming order details
    console.log('🍳 Kitchen received an order:', req.method, req.url);

    // Set custom response headers for restaurant branding
    res.setHeader(	'X-Spice-Level', 'medium');
    res.setHeader('X-Restaurant-Name','Code Cafe');

    // Route handling for different menu items
    if (req.url === '/burger') {
        // Serve burger order
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Here is your burger 🍔');
    } else if (req.url === '/fries') {
        // Serve fries order
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Here are your fries 🍟.');
    } else {
        // Handle unknown menu items
        res.statusCode = 404;
        res.end('Sorry, we do not have that item 😢.');
    }
});

// Configure server connection settings
server.keepAliveTimeout = 60000; // Set a keep-alive timeout to 60 seconds
server.headersTimeout = 65000;   // Set header timeout to 65 seconds (must be > keepAliveTimeout)

// Start the server and listen on port 8080
server.listen(8080, () => {
    console.log('\'🏪 Restaurant is open at http://localhost:8080');
});