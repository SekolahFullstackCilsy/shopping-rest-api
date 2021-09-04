const { Router } = require('express')
const { checkout } = require('../controllers/checkout')
const router = Router()
const authorization = require('../middleware/authorization')

router.post('/:userId', authorization, checkout)

module.exports = router