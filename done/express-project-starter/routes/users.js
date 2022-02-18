const express = require('express');
const csrf = require('csurf');
const bcrypt = require('bcryptjs')
const router = express.Router();


router.route('/signup')
.get()
.post()

router.route('/signin')
.get()
.post()

module.exports = router;
