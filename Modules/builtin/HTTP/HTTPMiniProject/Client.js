/**
 * HTTP Client Implementation
 * Simulates a restaurant ordering system client that sends requests to a local server.
 * Uses keep-alive connections for better performance.
 */
const http = require('http');

// Create a keep-alive agent
const agent = new http.Agent({
    keepAlive: true,
    keepAliveMsecs: 60000, // 1 minute
});

/**
 * Places a food order with the server
 * @param {string} order - The type of food to order (e.g., 'burger', 'fries')
 */
function placeOrder(order) {
    // Configure HTTP request options
    const options = {
        hostname: 'localhost',    // Server address
        port: 8080,              // Server port
        path: `/${order}`,       // Request a path with an order type
        method: 'GET',           // HTTP method
        agent: agent,            // Reuse the same connection (keep-alive)
        headers: {               // Custom request headers
            'X-Customer-Name': 'CodeLover',  // Customer identification
            'X-Portion-Size': 'large'        // Order customization
        }
    }
    // Send an HTTP request and handle the response
    const req = http.request(options, (res) => {
        // Log response status and headers
        console.log(`Status code: ${res.statusCode}`);
        console.log(`👂 Waiting for the kitchen's response for ${order}...`);
        console.log('📋 Response headers:', res.headers);

        // Handle incoming data chunks
        res.on('data', (chunk) => {
            console.log(`🍽️ Received: ${chunk.toString()}.`);
        });

        // Handle response completion
        res.on('end', () => {
            console.log(`✅ Finished receiving ${order}!\n.`);
        });
    })
    // Handle request errors
    req.on('error', (err) => {
        console.log(`⚠️ Error ordering: ${err.message}`);
    })
    req.end(); // Send the request to the server
}
    // Place multiple orders
    placeOrder('burger'); // Order burger
    placeOrder('fries'); // Order fries
    placeOrder('chips'); // Order something that does not exit