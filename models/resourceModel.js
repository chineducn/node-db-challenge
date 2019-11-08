const db = require('../data/db-config')

module.exports = {
    getResources,
    getResourceById,
    addResource,
}

function getResources() {
    return db('resource')
}

function getResourceById(id) {
    return db('resource')
        .where({ id: id })
        .first()
}

function addResource(resourceDetails) {
    return db('resource')
        .insert(resourceDetails)
        .then(newIdArray => {
            return getResourceById(newIdArray[0])
        })
}