const express = require('express');
const userRouter = require('./routes/user_routes')

const app = express();
app.set('view engine', 'pug');
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.get(/^\/[abc]+$/, (req, res) => {
    res.send('regex route')
});

app.all('*', (req, res) => {
    res.send('hello from catch all')
});

const port = 8080
app.listen(port, () => console.log(`Listening on port ${port}...`));
