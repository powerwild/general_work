const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.render('users', {users});
});

router.get('/:id(\\d+)', async(req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    res.render('profile', {user});
});

router.get('/signup', (req, res) => {
    res.render('signup', {breads: {white, wheat, wholegrain}})
});

router.post('/signup', async (req, res) => {
    const { username, email, password, faveBread } = req.body
    const user = await User.create({
        username,
        email,
        password,
        faveBread
    })
    res.redirect('/users')
});

module.exports = router;
