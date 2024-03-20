const express = require('express')
const router = express.Router()
const TasksController = require('../controllers/tasksController')

router.get('/', TasksController.allTasks)

module.exports = router