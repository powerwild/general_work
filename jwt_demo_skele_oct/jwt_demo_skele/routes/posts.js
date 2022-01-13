const express = require('express');
const { requireAuth } = require('../auth');

const router = express.Router();
router.use(requireAuth);

router.route('/')
.get((req, res) => {
    res.send('You have arrived at the post router')
})


module.exports = router;
