const { Router } = require('express')
const { getCart, addToCart, updateQty } = require('../controllers/cart')
const router = Router()
const authorization = require('../middleware/authorization')

router.post('/', authorization, addToCart)
router.post('/update/:id', authorization, updateQty)
router.get('/:id', authorization, getCart)

module.exports = router