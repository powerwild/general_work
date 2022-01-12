const express = require("express");
const router = express.Router();
const db = require("../db/models");

const { Task } = db;

router.get("/", (req, res) => {
  
});

module.exports = router;
