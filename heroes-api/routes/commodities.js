var express = require('express');
var db = require('../mock-db');
var _ = require('lodash');
var format = require('../common/format');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json(db.commodities);
});

router.get('/:id', function (req, res, next) {
    let id = req.params.id;

    res.json(db.commodities.find(it => it.id == id));
});

router.post('/', function (req, res, next) {
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
});

router.delete('/:id', function (req, res, next) {
    let id = req.params.id;

    _.remove(db.commodities, o => o.id == id);

    res.json({
        success: true
    });
});

router.put('/:id', function (req, res, next) {
    let id = req.params.id;

    var commodity = db.commodities.find(o => o.id == id);
    commodity.name = req.body.name;
    commodity.category = req.body.category;
    commodity.color = req.body.color;
    commodity.price = req.body.price;

    res.json({
        success: true
    });
});

module.exports = router;
