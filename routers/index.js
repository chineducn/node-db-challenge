const express = require('express')
const projectRouter = require('./projectRouter')
const resourceRouter = require('./resourceRouter')

const router = express.Router()

router.use('/api/projects', projectRouter)
router.use('/api/resources', resourceRouter)

module.exports = router