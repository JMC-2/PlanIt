const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController.js');
const signupController = require('../controllers/signupController.js');


router.post('/login', 
  // JWT stuff
  // not doing any redirecting on the backend 
  // need to pass user ID to FE on success
  (req, res) => res.status(200).json({})
);
  
router.post('/signup', signupController.addUser,
  // verify user is unique
  // save info in DB -- if all is good return true to FE, otherwise false  
  // need to pass user ID to FE on success
  (req, res) => res.status(200).json(res.locals.isSuccess)
);

router.delete('/logout',
  (req, res) => res.status(200).json('success')
);

module.exports = router;