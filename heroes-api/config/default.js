var config = {
    //环境变量
    env: {
        NODE_ENV: 'development' //choice: production
    },
    //json web token 设置
    jwt: {
        secret: 'myscret',
        expiresIn: 60 * 60
    }
}

module.exports = config;