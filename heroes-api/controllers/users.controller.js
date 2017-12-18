var db = require('../mock-db');
var _ = require('lodash');

exports.getlist = function (req, res, next) {
    res.json(db.users);
};

exports.getById = function (req, res) {
    let id = req.params.id;

    res.json(db.users.find(it => it.id == id));
}

exports.create = function (req, res) {
    let user = {
        id: _.maxBy(db.users, o => o.id).id + 1,
        username: req.body.username,
        password: req.body.password,
        nickName: req.body.nickName || ''
    };
    db.users.push(user);
    res.json(user);
}

exports.deleteById = function (req, res) {
    let id = req.params.id;

    _.remove(db.users, o => o.id == id);

    res.json({
        success: true
    });
}

exports.changeNickName = function (req, res) {
    let id = req.params.id;

    var user = db.users.find(o => o.id == id);
    user.nickName = req.body.nickName;

    res.json({
        success: true
    });
}

exports.changePassword = function (req, res) {
    let id = req.params.id;

    var user = db.users.find(o => o.id == id);
    user.password = req.body.password;

    res.json({
        success: true
    });
}


