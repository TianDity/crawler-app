module.exports = {
    mysql: {
        base: {
            host: 'localhost_3306',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        },
        conf: ['txclass', 'root', '12345678']
    }
}