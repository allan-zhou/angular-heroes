var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var expressJWT = require('express-jwt');

var config = require('./config/default');
var index = require('./routes/index');
var users = require('./routes/users');
var heroes = require('./routes/heroes');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bearerToken());
app.use(expressJWT({ secret: config.jwt.secret }).unless({ path:['/api/auth/token','/api/auth/register','/api/auth/login']}))

app.use(function (req, res, next) {
  // console.log(req.method);
  // console.log(req.headers.authorization);
  // console.log(req.headers);
  // // console.log(req.token); // bearerToken
  // console.log(req.user);
  next();
});

app.use('/api', index);
app.use('/api/users', users);
app.use('/api/heroes', heroes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  var response = {
    success: false,
    message: err.message || 'server error'
  };
  res.json(response);
});

function getErrorMessage(field) {
  var response = {
    success: false,
    message: field + ' field is missing or Invalid in the request'
  };
  return response;
}

module.exports = app;
