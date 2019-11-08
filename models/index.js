const project = require('./projectModel')
const resource = require('./resourceModel')
const task = require('./taskModel')

module.exports = {
    getProjects: project.getProjects,
    getProjectById: project.getProjectById,
    addProject: project.addProject,
    getResources: resource.getResources,
    getResourceById: resource.getResourceById,
    addResource: resource.addResource,
    getProjectTasks: task.getProjectTasks,
}