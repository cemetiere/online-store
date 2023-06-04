const Router = require('express')
const router = new Router()
const BrandController = require('../controllers/brandController')

router.post('/create', BrandController.create)
router.get('/getAll', BrandController.getAll)

module.exports = router