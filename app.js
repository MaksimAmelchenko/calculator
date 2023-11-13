var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));

// admin/admin
const users = [{ username: 'admin', password: '$2a$12$EtE.mMyqt5i2mkPuqPcJMuHWD2TI0n1EgNrDI7pDNx9dBnflKlpLG' }];

passport.use(
  new Strategy(async function (username, password, cb) {
    const user = users.find(user => user.username === username);
    if (!user) {
      return cb(null, false);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return cb(null, false);
    }

    return cb(null, user);
  }),
);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
