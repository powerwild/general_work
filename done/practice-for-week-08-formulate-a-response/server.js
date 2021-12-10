const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello there!</h1>
    </body>
    </html>`);
})

const port = 5000;
server.listen(port, () => console.log(`The server is listening on port`, port));
