const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController.js');


 
//add task
router.post('/add', 
  // add task to database for specific username passed from FE
  (req, res) => res.status(200).json({})

)

//update task
router.patch('/update',
  (req, res) => res.status(200).json({})
)

// compelete task
router.patch('/complete',
  // change complete to true in DB
  (req, res) => res.status(200).json({})

)

// get for the specific date
router.post('/task', 
  (req, res) => res.status(200).json({})

) 



module.exports = router;