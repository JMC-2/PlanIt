const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController.js');
const signupController = require('../controllers/signupController.js');


router.post('/login',
  // check for jwt?
  loginController.checkUser, 
  loginController.generateToken,
  (req, res) => res.status(200).json(res.locals.userInfo)
);
  
router.post('/signup', 
  signupController.checkUser, 
  signupController.addUser,
  loginController.generateToken,
  (req, res) => res.status(200).json(res.locals.userInfo)
);

router.delete('/logout',
  (req, res) => res.status(200).json('success')
);

module.exports = router;