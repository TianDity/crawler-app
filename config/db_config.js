const ENV = require('./env_config');

module.exports = {
    mysql: {
        base: {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        },
        conf: ['txclass', 'root', ENV.isPrd ? 'xxx' : '12345678']
    },
    REDIS_CONF: ['6379', '127.0.0.1']
}
