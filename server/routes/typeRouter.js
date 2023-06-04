const Router = require('express')
const router = new Router()
const TypeController = require('../controllers/typeController')

router.post('/create', TypeController.create)
router.get('/getAll', TypeController.getAll)

module.exports = router