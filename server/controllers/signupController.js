const db = require('../models/PlanItModel.js');
const bcrypt = require('bcryptjs');


const createErr = (method, err) => {
  return ({
    log: `${method} method inside signupController: ${err}`,
    message: `This error occured in ${method} method inside signupController. Check terminal for error.`
  })
}


const signupController = {

  // check if username exists
  checkUser: (req, res, next) => {
    const { username, email } = req.body;
    const query = 'SELECT * FROM users WHERE username = $1 OR email = $2;';
    db.query(query,[username, email])
      .then(dbResponse => {
        if (dbResponse.rows[0] === undefined) {
          return next();
        } else {
          return res.status(401).json({ isSuccess: false});
        }
      })
      .catch(err => {
        return next(createErr('checkUser', err));
      });
  },

  addUser: (req, res, next) => {
    console.log(req.body);
    const { username, name, email, password } = req.body;
    const query = 'INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *;';
    db.query(query, [username, name, email, password], (err, result) => {
      if (err) {
        console.log(err);
        return next(createErr('addUser', err));
      } else {
        // console.log('db result: ', result);
        // console.log('result', result.rows)
        res.locals.userInfo = {
          user_id: result.rows[0].user_id,
          username: result.rows[0].username,
          isSuccess: true,
        };
        return next();
      }
    });
  },

};

module.exports = signupController;
