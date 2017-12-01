var express = require('express');
var jwt = require('jsonwebtoken');
var _ = require('lodash');

var db = require('../mock-db');
var config = require('../config/default');

var router = express.Router();

router.post('/auth/login', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    var result = db.users.find(o => o.username == username && o.password == password);
    if (result) {
        var cloned = _.clone(result);
        var token = getSignedToken(cloned);

        delete cloned.password; //返回的用户信息删除password

        res.json({
            success: true,
            user: cloned,
            token: token,
            permissions: ''
        });
    }
    else {
        res.json({
            success: false,
            message: 'invalid user or password'
        });
    }
})

// 刷新token，使用oldtoken换取新的token
// 请求格式：/auth/refreshtoken?token=xxxxx
router.get('/auth/refreshtoken', function (req, res, next) {
    var token = req.query.token;

    var dToken = jwt.decode(token);//解析token
    if (this.isTokenRefreshExpired(dToken.iat)) { //刷票过期时间3个小时
        res.json({
            success: false,
            message: 'refresh expired'
        });
    }
    else {
        var username = dToken.username;
        var password = dToken.password;
        var result = db.users.find(o => o.username == username && o.password == password);
        if (result) {
            var cloned = _.clone(result);
            var token = getSignedToken(cloned);
            res.json({
                success: true,
                token: token
            });
        }
        else {
            res.json({
                success: false,
                message: 'invalid user or password'
            });
        }
    }
})

router.post('/auth/register', function (req, res, next) {
    var user = {
        id: _.maxBy(db.users, o => o.id).id + 1,
        username: req.body.username,
        password: req.body.password,
        nickName: req.body.nickName
    };

    db.users.push(user);
    res.json(user);
})

function getSignedToken(data) {
    return jwt.sign(data, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
}

function isTokenExpired(expiresIn) {
    return Math.floor(Date.now() / 1000) - expiresIn > 60 * 60 * 3;
}

function isTokenRefreshExpired(expiresIn) {
    return Math.floor(Date.now() / 1000) - expiresIn > 60 * 60;
}

module.exports = router;
