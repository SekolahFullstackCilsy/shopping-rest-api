const { Router } = require('express')
const router = Router()
const { upload } = require('../controllers/upload')
const authorization = require('../middleware/authorization')

router.post('/', authorization, upload)

module.exports = router