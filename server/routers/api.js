const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController.js');

 
 
//route set up to handle adding a task to the tasks database
router.post('/add', taskController.addTask,taskController.getTask,
  (req, res) => res.status(200).json(res.locals.taskList)

);

//update a task in the tasks database
router.patch('/update',
  (req, res) => res.status(200).json({})
);

// compelete task
router.patch('/complete',
  // change complete to true in DB
  // FE needs nothing back
  (req, res) => res.status(200).json({})
);

// get all tasks for a particular user
router.post('/task',
  taskController.getTask,
  (req, res) => res.status(200).json(res.locals.taskList)
); 



module.exports = router;