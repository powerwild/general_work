const express = require('express');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user_routes');


const app = express();
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.render('layout')
});

app.get(/^\/[abc]+$/, (req, res) => {
    res.send('regex route')
});

app.all('*', (req, res) => {
    res.send('hello from catch all')
});

const port = 8080
app.listen(port, () => console.log(`Listening on port ${port}...`));
