const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController.js');
const signupController = require('../controllers/signupController.js');


// this route checks for a jwt when the user loads the login page
router.get('/login',
  loginController.checkJWT,
  (req, res) => res.status(200).json('no current jwt')
);

// this route will handle a login request
router.post('/login',
  loginController.checkUser, 
  loginController.generateToken,
  (req, res) => res.status(200).json(res.locals.userInfo)
);

// route for a signup request from the client
router.post('/signup', 
  signupController.checkUser, 
  signupController.addUser,
  loginController.generateToken,
  (req, res) => res.status(200).json(res.locals.userInfo)
);

router.delete('/logout',
  // delete token
  (req, res) => res.status(200).json('success')
);

module.exports = router;