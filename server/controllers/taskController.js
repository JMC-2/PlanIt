const db = require('../models/PlanItModel');

const taskController = {};

const createErr = (method, err) => {
  return ({
    log: `${method} method inside taskController: ${err}`,
    message: `This error occured in ${method} method inside taskController. Check terminal for error.`
  })
}

module.exports = taskController;
