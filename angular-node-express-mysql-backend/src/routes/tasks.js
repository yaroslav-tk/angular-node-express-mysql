const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasks.controller');

router.get('/', tasksController.getListOfUserTasks);
router.get('/:id', tasksController.getSingleTask);

router.post('/add', tasksController.addTask);
router.put('/edit/:id', tasksController.editTask);
router.put('/markTaskAsDone', tasksController.markTaskAsDone)

router.delete('/:id', tasksController.deleteTask)

module.exports = router;