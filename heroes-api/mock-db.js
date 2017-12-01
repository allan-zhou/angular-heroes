let db = {
    users: [
        {
            id: 1,
            username: 'admin',
            password: 'admin',
            nickName: 'ADMIN'
        },
        {
            id: 2,
            username: 'zhangsan',
            password: 'test',
            nickName: '张三'
        }
    ],
    heroes: [
        {
            id: 11, name: '曹操', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 12, name: '关羽', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 13, name: '张飞', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 14, name: '赵云', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 15, name: '马超', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 16, name: '黄忠', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 17, name: '刘备', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 18, name: '孙权', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 19, name: '吕布', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        },
        {
            id: 20, name: '典韦', createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        }
    ],
    commodities: [
        {
            id: 1,
            name: 'iphone x 128G',
            thumb: '',
            price: 7888,
            category: {
                id: 1,
                name: '手机'
            },
            color: {
                id: 1,
                name: '亮黑色'
            },
            createBy: {
                "id": 1,
                "username": "admin",
                "nickName": "ADMIN"
            }
        }
    ],
    commodityCategory: [
        {
            id: 1,
            name: '手机'
        },
        {
            id: 2,
            name: '电视'
        },
        {
            id: 2,
            name: '冰箱'
        }
    ],
    commodityColor: [
        {
            id: 1,
            name: '亮黑色',
        },
        {
            id: 2,
            name: '深邃蓝',
        },
        {
            id: 3,
            name: '中国红',
        }
    ]
};

module.exports = db;