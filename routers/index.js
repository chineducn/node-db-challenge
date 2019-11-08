const express = require('express')
const projectRouter = require('./projectRouter')

const router = express.Router()

router.use('/api/projects', projectRouter)

module.exports = router