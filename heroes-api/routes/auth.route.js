var express = require('express');
var { AuthController } = require('../controllers/index')

var router = express.Router();

router.post('/auth/login', AuthController.login);

// 刷新token，使用oldtoken换取新的token
// 请求格式：/auth/refreshtoken?token=xxxxx
router.get('/auth/refreshtoken', AuthController.refreshToken);

router.post('/auth/register', AuthController.register);

module.exports = router;


