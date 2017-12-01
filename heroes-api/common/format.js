var _ = require('lodash');

exports.formatCreateBy = (reqUser) => {
    var result = _.clone(reqUser);
    delete result.iat;
    delete result.exp;

    return result;
}