const { Router } = require('express')
const { create, findAll } = require('../controllers/products')
const router = Router()
const authorization = require('../middleware/authorization')

router.post('/', authorization, create)
router.get('/', authorization, findAll)

module.exports = router