const db = require('../data/db-config')

module.exports = {
    getProjects,
    getProjectById,
    addProject,
}

function getProjects() {
    return db('project')
        .then(projects => {
            return projects.map(project => {
                return {
                    ...project,
                    completed: project.completed
                        ? true
                        : false
                }
            })
        })
}

function getProjectById(id) {
    return db('project')
        .where({ id: id })
        .first()
        .then(project => {
            return {
                ...project,
                completed: project.completed
                    ? true
                    : false
            }
        })
}

function addProject(projectDetails) {
    return db('project')
        .insert(projectDetails)
        .then(newIdArray => {
            return getProjectById(newIdArray[0])
        })
}