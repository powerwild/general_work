const express = require('express');
const csurf = require('csurf');
const { User } = require('../models');

const csrfProtection = csurf({cookie: true});

const router = express.Router();

const emailChecker = (req, res, next) => {
    const exp = /^[a-zA-Z0-9-_]*@[a-z]*\.[a-z]{2,3}/
    if (exp.test(req.body.email)) next()
    else {
        req.errros = ['Email is invalid']
        next()
    }
};

router.get('/', async (req, res) => {
    const users = await User.findAll();
    // console.log(req.banana)
    res.render('users', {users});
});

router.get('/:id(\\d+)', async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    res.render('profile', {user});
});

router.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', {breads: ['white', 'wheat', 'wholegrain'], body: {}, errros: [], csrfToken: req.csrfToken()})
});

router.post('/signup', csrfProtection, emailChecker, async (req, res) => {
    const { username, email, password, faveBread } = req.body
    if (req.errors.length < 1) {
        const user = await User.create({
            username,
            email,
            password,
            faveBread
         })
        res.redirect('/users')
    } else res.render('signup', {breads: ['white', 'wheat', 'wholegrain'], body: req.body, errors: req.errors, csrfToken: req.csrfToken()})
});

module.exports = router;
