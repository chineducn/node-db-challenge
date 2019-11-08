const db = require('../data/db-config')

module.exports = {
    getProjects,
}

function getProjects() {
    return db('project')
        .then(projects => {
            return projects.map(project => {
                return {...project, completed: project.completed ? true : false}
            })
        })
}