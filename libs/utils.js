const cp = require('child_process')
const { resolve } = require('path')
const { nanoid } = require('nanoid')
const { qiniu, cryptoSecret } = require('../config/config')
const Qiniu = require('qiniu')
const crypto = require('crypto')

function startProcess(options) {
    const script = resolve(__dirname, '../crawlers/' + options.path);
    const child = cp.fork(script, []);

    let invoked = false;

    child.on('message', (msg) => {
        options.message(msg);
    })

    child.on('exit', (code) => {
        if (invoked) return;

        invoked = true;
        options.exit(code);
    })

    child.on('error', (err) => {
        if (invoked) return;

        invoked = true;
        options.error(err);
    })
}

function qiniuUpload(options) {
    const mac = new Qiniu.auth.digest.Mac(qiniu.keys.ak, qiniu.keys.sk);
    const config = new Qiniu.conf.Config();
    const client = new Qiniu.rs.BucketManager(mac, config);
    const key = nanoid() + options.ext;

    return new Promise((resolve, reject) => {
        client.fetch(options.url, options.bucket, key, (err, respBody, respInfo) => {
            if (err) {
                reject(err);
                return;
            }

            if (respInfo.statusCode === 200) {
                resolve({ key });
            } else {
                reject(respInfo);
            }
        })
    })
}

function makeCrypto(str) {
    const _md5 = crypto.createHash('md5');
    const content = `str=${str}&secret=${cryptoSecret}`;
    return _md5.update(content).digest('hex');
}

function trimSpace(str) {
    return str.replace(/\s+/g, '');
}

function returnInfo(errorInfo, data) {
    if (data) {
        errorInfo.data = data;
    }

    return errorInfo;
}

module.exports = {
    startProcess,
    qiniuUpload,
    makeCrypto,
    returnInfo,
    trimSpace
}
