const express = require('express');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');

const app = express();
app.set('view engine', 'pug');
app.use(express.urlencoded());
app.use(cookieParser());
const csrfProtection = csurf({cookie: true});

let guests = [];

app.get('/', (req, res) => {
    res.render('index', {title: 'Guest List', guests})
});

app.get('/guest', (req, res) => {
    res.render('guest-form', {title: 'Guest Form', csrfToken: req.csrfToken()})
});
function validateGuest(req, res, next) {
    const { fullname, email, numGuests } = req.body;
    const errors = [];
    if (!fullname || fullname.split(' ').length < 2
    ) errors.push('Please fill out the name field with first and last name.');
    if (!email) errors.push('Please fill out the email field with a valid email.');
    if (!numGuests || numGuests < 1) errors.push('Please fill out the Num Guests field with a number greater than zero.');
    req.errors = errors;
    next();
};

app.post('/guest', csrfProtection, validateGuest, (req, res) => {
    if (req.errors.length) {
        res.render('guest-form', {title: 'Guest Form', errors: req.errors, email, fullname, numGuests})
        return;
    };
    const { fullname, email, numGuests } = req.body;
    const guest = {
        fullname,
        email,
        numGuests
    };
    guests.push(guest);
    res.redirect('/');
});

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
