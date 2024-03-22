const Task = require('../models/Task')
const { raw } = require('express')


module.exports  = class TasksController {

    static async allTasks(req, res) {
        const task = await Task.findAll( { raw : true } )
        console.log(task)
        res.render('tasks', { task })
    }

    static async createTask(req, res) {
        const title = req.body.title
        const done = '0'

        await Task.create({title, done})
        res.redirect('/')
    }

    static async deleteTask(req, res) {
        const id = req.body.id

        await Task.destroy( { where: { id : id } } )
        res.redirect('/')
    }

    static async editTask(req, res) {
        const id = req.params.id
        const task = await Task.findOne( { where : { id : id }, raw : true  })
        console.log(id)
        res.render('edit-task', { task } )
    }
}