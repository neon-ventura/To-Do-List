const express = require('express')
const router = express.Router()
const TasksController = require('../controllers/tasksController')

router.get('/', TasksController.allTasks)
router.get('/edit/:id', TasksController.editTask)
router.post('/updateTask', TasksController.updateTask)
router.post('/doneTask', TasksController.doneTask)
router.post('/createTask', TasksController.createTask)
router.post('/deleteTask', TasksController.deleteTask)
module.exports = router