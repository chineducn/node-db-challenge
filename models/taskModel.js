const db = require('../data/db-config')

module.exports = {
    getProjectTasks,
}

function getProjectTasks(project_id) {
    return db('task as t')
        .join(
            'project as p',
            'p.id',
            't.project_id'
        )
        .select(
            'p.name as Project',
            'p.description as Project Description',
            't.description as Task',
            't.completed as Task Completion Status'
        )
        .where({ project_id })
        .then(tasks => {
            return tasks.map(task => {
                return {
                    ...task,
                    "Task Completion Status": task.completed
                        ? true
                        : false
                }
            })
        })
}