// Pipe the file stream data into the server

const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    const stream = fs.createReadStream('./content/big-file.txt', 'utf-8');
    stream.on('open', () => {
        stream.pipe(res);
    });
    stream.on('error', (err) => {
        console.error(err);
    });
}).listen(8080);