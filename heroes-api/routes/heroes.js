var express = require('express');
var db = require('../mock-db');
var _ = require('lodash');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json(db.heroes);
});

router.get('/:id', function (req, res, next) {
  let id = req.params.id;

  res.json(db.heroes.find(it => it.id == id));
});

router.post('/', function (req, res, next) {
  let hero = {
    id: _.maxBy(db.heroes, o => o.id).id + 1,
    name: req.body.name
  };
  db.heroes.push(hero);
  res.json(hero);
});

router.delete('/:id', function (req, res, next) {
  let id = req.params.id;

  _.remove(db.heroes, o => o.id == id);

  res.json({
    success: true
  });
});

router.put('/:id', function (req, res, next) {
  let id = req.params.id;

  var hero = db.heroes.find(o=>o.id == id);
  hero.name = req.body.name;

  res.json({
    success: true
  });
});


module.exports = router;
