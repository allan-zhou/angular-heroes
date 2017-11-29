var express = require('express');
var db = require('../mock-db');
var _ = require('lodash');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json(db.users);
});

router.get('/:id', function (req, res, next) {
  let id = req.params.id;

  res.json(db.users.find(it => it.id == id));
});

router.post('/', function (req, res, next) {
  let user = {
    id: _.maxBy(db.users, o => o.id).id + 1,
    username: req.body.username,
    password: req.body.password,
    nickName: req.body.nickName || ''
  };
  db.users.push(user);
  res.json(user);
});

router.delete('/:id', function (req, res, next) {
  let id = req.params.id;

  _.remove(db.users, o => o.id == id);

  res.json({
    success: true
  });
});

router.patch('/nickname/:id', function (req, res, next) {
  let id = req.params.id;

  var user = db.users.find(o => o.id == id);
  user.nickName = req.body.nickName;

  res.json({
    success: true
  });
})

router.patch('/changepwd/:id', function (req, res, next) {
  let id = req.params.id;

  var user = db.users.find(o => o.id == id);
  user.password = req.body.password;

  res.json({
    success: true
  });
})

module.exports = router;
