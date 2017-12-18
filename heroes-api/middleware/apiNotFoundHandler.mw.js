var statuses = require('statuses');

module.exports = function (req, res, next) {
    var errorCode = 404;
    var err = new Error(statuses[errorCode]);
    err.status = errorCode;
    next(err);
}