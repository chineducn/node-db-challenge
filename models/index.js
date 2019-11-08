const project = require('./projectModel')
const resource = require('./resourceModel')

module.exports = {
    getProjects: project.getProjects,
    getProjectById: project.getProjectById,
    addProject: project.addProject,
    getResources: resource.getResources,
    getResourceById: resource.getResourceById,
    addResource: resource.addResource,

}