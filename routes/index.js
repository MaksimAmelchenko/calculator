var express = require('express');
var passport = require('passport');

const { calculation } = require('../modules/calculator.service');
var router = express.Router();

/* GET home page. */
router.get('/', passport.authenticate('basic', { session: false }), function (req, res, next) {
  const { expression } = req.query;

  if (!expression) {
    throw new Error('Expression is required');
  }

  const result = calculation(expression);
  res.send({ result });
});

module.exports = router;
