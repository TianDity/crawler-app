const cp = require('child_process')
const { resolve } = require('path')
const { nanoid } = require('nanoid')
const Qiniu = require('qiniu')

module.exports = {
    startProcess(options) {
        const script = resolve(__dirname, options.path);
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
    },

    qiniuUpload(options) {
        const mac = new Qiniu.auth.digest.Mac(options.ak, options.sk);
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
}