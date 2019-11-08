const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json('this is the beginning of projects')
})

module.exports = router