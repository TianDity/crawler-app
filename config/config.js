const { REDIS_CONF } =  require('./db_config')
const { isPrd } = require('./env_config')

module.exports = {
    qiniu: {
        keys: {
            ak: 'why1cBca9l72szZwGjxRBbVp8Iy9GEE4ujgGS3SA',
            sk: 'thFnToYdQZl24lmIN5uHiGAJDIHgKsbpjWnmxN_q',
        },
        bucket: {
            climg: {
                bucket_name: 'crawler-imgs',
                domain: 'http://r96dom9io.hn-bkt.clouddn.com/',
            }
        }
    },
    crawler: {
        url: {
            main: 'https://msiwei.ke.qq.com/#category=-1&tab=0',
            course: 'https://msiwei.ke.qq.com/#tab=1&category=-1',
            teacher: 'https://msiwei.ke.qq.com/#category=-1&tab=2',
            about: 'https://msiwei.ke.qq.com/#category=-1&tab=3'
        }
    },
    sessionInfo: {
        keys: ['a1!s2@d3#f4$_+g5%h6^'],
        name: 'txclass.sid',
        prefix: 'txclass.sess',
    },
    cookieInfo: {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    },
    redisInfo: {
        all: `${REDIS_CONF[1]}:${REDIS_CONF[0]}`
    },
    adminInfo: {
        username: 'admin',
        password: 'admin'
    },
    cryptoSecret: 'DG34Egd4klkwetr5',
    corsOrigin: isPrd ? 'http://txclass.com' : 'http://localhost:3000',
}
