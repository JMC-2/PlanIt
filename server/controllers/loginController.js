const db = require('../models/PlanItModel');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
 
const createErr = (method, err) => {
  return ({
    log: `${method} method inside loginController: ${err}`,
    message: `This error occured in ${method} method inside loginController. Check terminal for error.`
  })
}


const loginController = {

  checkUser: (req, res, next) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2;';
    db.query(query,[username, password])
      .then(dbResponse => {
        if (dbResponse.rows[0]) {
          res.locals.userInfo = {
            user_id: dbResponse.rows[0].user_id,
            username: dbResponse.rows[0].username,
            isSuccess: true,
          };
          return next();
        } else {
          return res.status(401).json({ isSuccess: false});
        }
      })
      .catch(err => {
        return next(createErr('checkUser', err));
      });
  },

  generateToken: (req, res, next) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const data = {
      user_id: res.locals.userInfo.user_id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    };
    const token = jwt.sign(data, secretKey);

    res.locals.userInfo.jwt = token;
    return next();
  },
};


module.exports = loginController;
