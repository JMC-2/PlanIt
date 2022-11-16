const db = require('../models/PlanItModel.js');
const bcrypt = require('bcryptjs');


const createErr = (method) => {
  return ({
    log: `This error occured in ${method} method inside signupController`,
    message: `This error occured in ${method} method inside signupController. Check terminal for error.`
  })
}


const signupController = {

  // check if username exists

  addUser: (req, res, next) => {
    console.log(req.body);
    const { username, name, email, password } = req.body;
    const query = 'INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3, $4);';
    db.query(query, [username, name, email, password], (err, result) => {
      if (err) {
        console.log(err);
        next(createErr('addUser'));
      } else {
        res.locals.isSuccess = true;
        next();
      }
    });
  },

};

module.exports = signupController;
