const db = require('../models/PlanItModel');

const taskController = {};

const createErr = (method) => {
  return ({
    log: `This error occured in ${method} method inside taskController`,
    message: `This error occured in ${method} method inside taskController. Check terminal for error.`
  })
}

module.exports = taskController;
