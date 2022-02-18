const express = require('express');
const { asyncHandler } = require('../../utils');

const router = express.Router();
const db = require('../../db/models');

const { Tweet } = db;

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const tweets = await Tweet.findAll();
    res.json(tweets);
  })
);
router.post('/', asyncHandler(async (req, res) => {
  const body = req.body;
  console.log(body)
  const newTweet = await Tweet.create({
    message: body.message
  })
  res.status(201);
  res.json(newTweet);
}))

module.exports = router;
