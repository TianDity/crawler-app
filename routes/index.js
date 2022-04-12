const router = require('koa-router')()
const indexController = require('../controllers/Index')

router.prefix('/crawler')
// router.get('/', indexController.index)
router.get('/get_courses', indexController.getCourseData);

module.exports = router
