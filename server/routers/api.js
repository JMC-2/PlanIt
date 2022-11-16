const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController.js');

 
 
//add task
router.post('/add', taskController.addTask,
  (req, res) => res.status(200).json(res.locals.taskInfo)

);

//update task
router.patch('/update',
  (req, res) => res.status(200).json({})
);

// compelete task
router.patch('/complete',
  // change complete to true in DB
  // FE needs nothing back
  (req, res) => res.status(200).json({})
);

// get for the specific date
router.post('/task',
  taskController.getTask,
  (req, res) => res.status(200).json(res.locals.taskList)
); 



module.exports = router;