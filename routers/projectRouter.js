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

router.get('/:id', (req, res) => {
    db.getProjectById(req.params.id)
        .then(project => {
            res
                .status(200)
                .json(project)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the project, ${error}`
                })
        })
})

router.post('/', (req, res) => {
    db.addProject(req.body)
        .then(newProject => {
            res
                .status(201)
                .json(newProject)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error adding the project, ${error}`
                })
        })
})

router.get('/:id/tasks', (req, res) => {
    db.getProjectTasks(req.params.id)
        .then(tasks => {
            if (tasks.length) {
                res
                    .status(200)
                    .json(tasks)
            }
            else {
                res
                    .status(404)
                    .json({
                        message: `There are no saved tasks`
                    })
            }
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the tasks, ${error}`
                })
        })
})

router.get('/:id/tasks/:task_id', (req, res) => {
    db.getTaskById(req.params.task_id)
        .then(task => {
            res
                .status(200)
                .json(task)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the task, ${error}`
                })
        })
})

router.post('/:id/tasks', (req, res) => {
    const taskDetails = { ...req.body, project_id: req.params.id }
    db.addTask(taskDetails)
        .then(newTask => {
            res
                .status(201)
                .json(newTask)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error adding the task, ${error}`
                })
        })
})

module.exports = router