const router = require('koa-router')()
const crawlerController = require('../controllers/crawler')

router.prefix('/crawler')

router.get('/crawler_slider_data', crawlerController.crawSliderData)


module.exports = router