const express = require('express')
const db = require('../models')

const router = express.Router()

router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            if (projects.length) {
                res
                    .status(200)
                    .json(projects)
            }
            else {
                res
                    .status(404)
                    .json({
                        message: `There are no saved projects`
                    })
            }
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the projects, ${error}`
                })
        })
})

module.exports = router