const redis = require('redis');
const { REDIS_CONF } = require('../../config/db_config');

const red = redis.createClient(REDIS_CONF);

(async () => {
  red.connect();
})();

red.on('error', (err) => {
  console.error('Redis error：' + err)
})

module.exports = red;
