// HTTP Module

//Regular http module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to my homepage!");
    }
    if (req.url === "/api") {
        res.end("This is the API endpoint of the server.");
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for...</p>
        `
        );
    }
});

// With using event emitter api
server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(8080, () => {
    console.log("Server listening on port: 8080...");
});