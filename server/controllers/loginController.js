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

  // this method verifies a users username and password
  checkUser: (req, res, next) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2;';
    db.query(query,[username, password])
      .then(dbResponse => {
        // if there username and password is correct we save their info to send back to the client
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

  // this method generates a jwt with a user id, username, and time til expiration. this jwt is saved to send back to client
  generateToken: (req, res, next) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const data = {
      user_id: res.locals.userInfo.user_id,
      username: res.locals.userInfo.username,
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    };
    const token = jwt.sign(data, secretKey);

    res.locals.userInfo.jwt = token;
    console.log('gen token: ', token);
    return next();
  },


  checkJWT: (req, res, next) => {  
    // let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
      const token = req.headers.auth;
      console.log(typeof token);
      // if there is no jwt then return to next middleware
      if (token === 'null' || token === 'undefined') {
        console.log('there is no token')
        return next();
      } 

      // if there is a jwt we need to verify if it is correct
      const verified = jwt.verify(token, jwtSecretKey);
      if(verified){
        // decoding the jwt to send user id and username back to the client
        const { user_id, username } = jwt.decode(token)
            return res.status(200).json({isSuccess : true, message: 'verified', user_id, username});
        }
      
    } catch (error) {
        // if there is an error with the middleware invoke the global middleware handler
      return next(createErr('checkJWT', error));
    }

    return next();
  },
};


module.exports = loginController;
