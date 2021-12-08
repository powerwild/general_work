const http = require("http");
const fs = require('fs');

let database = [];
let taskId = 1;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method === '' && req.url === '') {
        const htmlPage = fs.readFileSync('index.html');
        const taskList = database.map(task => {
            return `<li>${task['tasks']} - ${task['time']}</li>`;
        });
        const resBody = htmlPage.replace('#{tasks}', taskList.join(''));
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        return res.end(resBody);
    }

    if (req.method === 'GET' && req.url === '/') {
        const resBody = fs.readFileSync('index.html');
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        //res.write(); //  can write in specific body content
        return res.end(resBody); // either adds to the body but end can only add once and can just be empty
    }
    if (req.method === 'GET' && req.url === '/main.css') {
        const resBody = fs.readFileSync('main.css');
        res.statusCode = 200;
        res.setHeader('content-type', 'text/css');
        return res.end(resBody);
    }
    let reqBody = "";
    req.on('data', (data) => reqBody += data);
    req.on('end', () => {
        if (reqBody) {
            req.body = reqBody;
                .split('&')
                .map((keyValuePair) => keyValuePair.split('='))
                .map(([key, value]) => [key, value.replace('+', ' ')])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key,value]) => {
                acc[key] = value;
                return acc;
                }, {})
        }
        // app.use(express.urlencoded)  //does the same thing as above
    })
    // const htmlTemplate = fs.readFileSync('./profile-page.html', 'utf-8');
    // const htmlPage = htmlTemplate;
    // htmlPage.replace(/#{username}/g, 'DemoUser'); // will replace the username variable in
    // htmlPage.replace(/#{biography}/g, 'Hello World!');  // the html template with the provided string

});
const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
