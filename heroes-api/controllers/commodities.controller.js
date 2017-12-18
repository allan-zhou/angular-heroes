var db = require('../mock-db');
var _ = require('lodash');
var format = require('../common/format');

exports.getlist = function (req, res) {
    res.json(db.commodities);
};

exports.getById = function (req, res) {
    let id = req.params.id;

    res.json(db.commodities.find(it => it.id == id));
};

exports.create = function (req, res) {
    let commodity = {
        id: _.maxBy(db.commodities, o => o.id).id + 1,
        name: req.body.name,
        category: req.body.category,
        color: req.body.color,
        price: req.body.price,
        createBy: format.formatCreateBy(req.user)
    };
    db.commodities.push(commodity);
    res.json(commodity);
};

exports.deleteById = function (req, res) {
    let id = req.params.id;

    _.remove(db.commodities, o => o.id == id);

    res.json({
        success: true
    });
};

exports.updateById = function (req, res) {
    let id = req.params.id;

    var commodity = db.commodities.find(o => o.id == id);
    commodity.name = req.body.name;
    commodity.category = req.body.category;
    commodity.color = req.body.color;
    commodity.price = req.body.price;

    res.json({
        success: true
    });
};

