const Task = require('../models/Task')

module.exports  = class TasksController {
    static allTasks(req, res) {
        res.render('tasks')
    }
}