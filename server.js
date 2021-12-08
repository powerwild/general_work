const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
    const htmlTemplate = fs.readFileSync('./profile-page.html', 'utf-8');
    const htmlPage = htmlTemplate;
    htmlPage.replace(/#{username}/g, 'DemoUser'); // will replace the username variable in 
    htmlPage.replace(/#{biography}/g, 'Hello World!');  // the html template with the provided string

    let reqBody = "";
    req.on('data', (data) => reqBody += data);
    reqBody.split('&');
    reqBody = reqBody.map(el => el.split('='));

    if(req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/css');
        res.write('Hello World');
        return res.end('!'); // either adds to the body but end can only add once and can just be empty
    }
});
const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
