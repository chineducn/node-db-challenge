const express = require('express')
const db = require('../models')

const router = express.Router()

router.get('/', (req, res) => {
    db.getResources()
        .then(resources => {
            if (resources.length) {
                res
                    .status(200)
                    .json(resources)
            }
            else {
                res
                    .status(404)
                    .json({
                        message: `There are no saved resources`
                    })
            }
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the resources, ${error}`
                })
        })
})

router.get('/:id', (req, res) => {
    db.getResourceById(req.params.id)
        .then(resource => {
            res
                .status(200)
                .json(resource)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the resource, ${error}`
                })
        })
})

router.post('/', (req, res) => {
    db.addResource(req.body)
        .then(newResource => {
            res
                .status(201)
                .json(newResource)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error adding the resource, ${error}`
                })
        })
})

module.exports = router