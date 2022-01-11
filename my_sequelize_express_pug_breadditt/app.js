const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const userRouter = require('./routes/user_routes');
const postRouter = require('./routes/posts');


const app = express();
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(cookieParser());
app.use(session({
    secret: 'secretKeyFromENVFile',
    resave: false,
    saveUninitialized: false
}
));

app.use('/users', userRouter);
app.use('/posts', postRouter);

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
