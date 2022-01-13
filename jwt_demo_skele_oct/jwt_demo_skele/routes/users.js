const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { getUserToken } = require('../auth');

const router = express.Router();

router.route('/')
.get((req, res) => {
    res.json({message: "Suceess"})
})
.post(async (req, res) => {
    const { username, password } = req.body;
    const newPass = await bcrypt.hash(password, 12)
    const user = User.create({
        username,
        password: newPass
    })
    const token = getUserToken(user);
    res.json({token})
})

module.exports = router;
