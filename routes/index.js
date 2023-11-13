const express = require('express');
const passport = require('passport');

const { calculation } = require('../modules/calculator.service');
const { InvalidParametersError } = require('../lib/errors/invalid-parameters-error');

const router = express.Router();

router.get('/', passport.authenticate('basic', { session: false }), function (req, res, next) {
  const { expression } = req.query;

  if (!expression) {
    throw new InvalidParametersError('1Expression is required');
  }

  const result = calculation(expression);
  res.send({ result });
});

module.exports = router;
