const router = require('koa-router')()
const adminController = require('../controllers/Admin')

router.prefix('/admin')
router.get('/create_admin', adminController.createAdmin)
router.post('/login_action', adminController.loginAction)
router.post('/login_check', adminController.loginCheck)
router.post('/loginout_action', adminController.loginOut)

module.exports = router
