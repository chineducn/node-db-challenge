const express = require('express')
const db = require('../models')

const router = express.Router()

router.get('/', (req, res) => {
    res.json('hello resources')
})

module.exports = router