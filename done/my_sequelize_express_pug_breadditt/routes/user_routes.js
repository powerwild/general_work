const express = require('express');
const csurf = require('csurf');
const { User } = require('../database/models');
const bcrypt = require('bcryptjs');

const csrfProtection = csurf({cookie: true});

const router = express.Router();

const asyncHandler = (handler) => {
    return ((req, res, next) => {
        return handler(req, res, next).catch(next)
    })
};

const emailChecker = (req, res, next) => {
    const exp = /^[a-zA-Z0-9-_]*@[a-z]*\.[a-z]{2,3}/
    if (exp.test(req.body.email)) next()
    else {
        req.errros = ['Email is invalid']
        next()
    }
};

router.get('/', asyncHandler(async (req, res) => {
    const users = await User.findAll();
    // console.log(req.banana)
    res.render('users', {users});
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    res.render('profile', {user});
}));

router.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', {breads: ['white', 'wheat', 'wholegrain'], body: {}, errros: [], csrfToken: req.csrfToken()})
});

router.post('/signup', csrfProtection, emailChecker, asyncHandler(async (req, res) => {
    const { username, email, password, faveBread } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!req.errors) {
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            faveBread
         })
         req.session.user = {userId: user.id, username: user.name};
        res.redirect('/users')
    } else res.render('signup', {breads: ['white', 'wheat', 'wholegrain'], body: req.body, errors: req.errors, csrfToken: req.csrfToken()})
}));

router.get('/login', csrfProtection, (req, res) => {
    res.render('login', {csrfToken: req.csrfToken()})
});

router.post('/login', csrfProtection, asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({where: {email}});
    const isPass = await bcrypt.compare(password, user.hashedPassword);
    if (isPass) {
        req.session.user = {userId: user.id, username: user.name};
        res.redirect('/users');
    }
}));

router.get('/logout', (req, res) => {
    delete req.session.user;
    req.session.save(() => {
        res.redirect('/users');
    })
});

module.exports = router;
