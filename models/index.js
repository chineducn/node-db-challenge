const project = require('./projectModel')

module.exports = {
    getProjects: project.getProjects,
    getProjectById: project.getProjectById,
    addProject: project.addProject,
}