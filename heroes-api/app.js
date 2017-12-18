var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var expressJWT = require('express-jwt');

var config = require('./config/default');
var { AuthRote, UsersRote, HeroesRote, CommoditiesRote } = require('./routes/index');
var { ApiErrorHandler, ApiNotFoundHandler } = require('./middleware/index');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bearerToken());

app.use(expressJWT({ secret: config.jwt.secret }).unless({ path: ['/api/auth/register', '/api/auth/login', '/api/auth/refreshtoken'] }));

app.use(function (req, res, next) {
  // console.log(req.headers.authorization);
  // console.log(req.headers);
  // // console.log(req.token); // bearerToken
  // console.log(req.user);
  next();
});

app.use('/api', AuthRote);
app.use('/api/users', UsersRote);
app.use('/api/heroes', HeroesRote);
app.use('/api/commodities', CommoditiesRote);


// 404 handler
app.use(ApiNotFoundHandler);
// error handler
app.use(ApiErrorHandler);

module.exports = app;
