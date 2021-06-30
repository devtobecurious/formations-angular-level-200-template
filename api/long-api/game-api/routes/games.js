const express = require('express');
const router = express.Router();
const Game = require('../models/game');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const array = [];

  let max = 100000;

  if (req.query.max) {
    max = req.query.max;
  }

  for (let index = 0; index < max; index++) {
    const game = new Game(index, `title-${index}`, index % 2);
    array.push(game);
  }

  res.send(array);
  res.end();
});

module.exports = router;
