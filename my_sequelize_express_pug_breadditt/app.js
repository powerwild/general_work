const express = require('express');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user_routes');


const app = express();
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(cookieParser());
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.render('layout')
});

app.get(/^\/[abc]+$/, (req, res) => {
    res.send('regex route')
});

// app.all('*', (req, res) => {
//     res.send('hello from catch all')
// });

app.use((req, res, next) => {
    const error = new Error('Page Not Found')
    error.status = 404
    next(err)
});

app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.status)
})

// const port = 8080
// app.listen(port, () => console.log(`Listening on port ${port}...`));


module.exports = app;
