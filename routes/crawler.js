const router = require('koa-router')()
const crawlerController = require('../controllers/crawler')

router.prefix('/crawler')

router.get('/crawler_slider_data', crawlerController.crawSliderData)
router.get('/crawler_agency_info', crawlerController.crawAgencyInfo)
router.get('/crawler_recom_course', crawlerController.crawRecomCourse)


module.exports = router