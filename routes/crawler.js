const router = require('koa-router')()
const crawlerController = require('../controllers/Crawler')

router.prefix('/crawler')

router.get('/crawler_slider_data', crawlerController.crawlSliderData)
router.get('/crawler_agency_info', crawlerController.crawlAgencyInfo)
router.get('/crawler_recom_course', crawlerController.crawlRecomCourse)
router.get('/crawler_teacher_list', crawlerController.crawlTeacherList)
router.get('/crawler_student_list', crawlerController.crawlStudentList)


module.exports = router