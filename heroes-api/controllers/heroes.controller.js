var db = require('../mock-db');
var _ = require('lodash');

exports.getlist = function (req, res) {
    res.json(db.heroes);
};

exports.getById = function (req, res) {
    let id = req.params.id;

    res.json(db.heroes.find(it => it.id == id));
};

exports.create = function (req, res) {
    let hero = {
        id: _.maxBy(db.heroes, o => o.id).id + 1,
        name: req.body.name,
        createBy: {
            id: req.user.id,
            username: req.user.username,
            nickName: req.user.nickName
        }
    };
    db.heroes.push(hero);
    res.json(hero);
};

exports.deleteById = function (req, res) {
    let id = req.params.id;

    _.remove(db.heroes, o => o.id == id);

    res.json({
        success: true
    });
};

exports.updateById = function (req, res) {
    let id = req.params.id;

    var hero = db.heroes.find(o => o.id == id);
    hero.name = req.body.name;

    res.json({
        success: true
    });
};


