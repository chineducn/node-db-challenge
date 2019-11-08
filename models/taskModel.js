const db = require('../data/db-config')

module.exports = {
    getProjectTasks,
    addTask,
    getTaskById,
}

function getTaskById(id) {
    return db('task')
        .where({ id: id })
        .first()
        .then(task => {
            return {
                ...task,
                completed: task.completed
                    ? true
                    : false
            }
        })
}

function addTask(taskDetails) {
    return db('task')
        .insert(taskDetails)
        .then(newIdArray => {
            return getTaskById(newIdArray[0])
        })
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