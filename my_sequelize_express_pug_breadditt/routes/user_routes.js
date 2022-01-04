const express = require('express');
const { User } = require('./models');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.render('users', {users});
});

router.get('/:id', async(req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    res.render('profile', {user});
});



module.exports = router;
