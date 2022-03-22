const router = require('koa-router')()
const crawlerController = require('../controllers/crawler')
const cp = require('child_process')
const { resolve } = require('path')

router, prefix('/crawler')

router.get('/', async (ctx, next) => {
  const script = resolve(__dirname, '../puppeteer/crawler.js');
  const child = cp.fork(script, []);

  let invoked = false;

  child.on('message', (msg) => {
    console.log(msg)
  })

  child.on('exit', (code) => {
    if (invoked) return;

    invoked = true;
    console.log(data);
  })

  child.on('error', (err) => {
    if (invoked) return;

    invoked = true;
    console.log(err);
  })

})

module.exports = router
