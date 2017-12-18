var express = require('express');
var { UsersController } = require('../controllers/index');

var router = express.Router();

router.get('/', UsersController.getlist);

router.get('/:id', UsersController.getById);

router.post('/', UsersController.create);

router.delete('/:id', UsersController.deleteById);

router.patch('/nickname/:id', UsersController.changeNickName);

router.patch('/changepwd/:id', UsersController.changePassword);

module.exports = router;

