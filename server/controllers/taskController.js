const db = require('../models/PlanItModel');

const taskController = {};

const createErr = (method, err) => {
  return ({
    log: `${method} method inside taskController: ${err}`,
    message: `This error occured in ${method} method inside taskController. Check terminal for error.`
  })
};

taskController.addTask = (req, res, next) => {
  const { userId, inputName, description, date, time, schedule, type } = req.body;
  const query = 'INSERT INTO tasks (user_id, name, description, date, time, calendar_id) VALUES ($1, $2, $3, $4, $5, (SELECT calendar_id FROM calendars WHERE name=$6)) RETURNING *;';
  db.query(query, [userId, inputName, description, date, time, type], (err, result) => {
    if (err) {
      return next(createErr('addTask', err));
    } else {
      // console.log('db result: ', result);
      // console.log('result', result.rows)
      res.locals.taskInfo = {
        task_id: result.rows[0].task_id,
        name: result.rows[0].name,
        isSuccess: true,
      };
      return next();
    }
  });
};


taskController.getTask = (req, res, next) => {
  const { userId } = req.body;
  const query = 'SELECT * FROM tasks WHERE user_id = $1;';
  db.query(query, [userId], (err, result) => {
    if (err) {
      return next(createErr('getTask', err));
    } else {
      // console.log('db result: ', result);
      // console.log('result', result.rows)
      res.locals.taskList = result.rows;
      return next();
    }
  });
};

module.exports = taskController;
 

//  task_id     SERIAL PRIMARY KEY NOT NULL,
//   user_id     INT NOT NULL,
//   name        VARCHAR(50) NOT NULL,
//   description        VARCHAR(255) NOT NULL,
//   completed        BOOLEAN DEFAULT false,
//   date         DATE,
//   time         TIME,
//   calendar_id  INT,

//  const body = {
//   userId: props.userId,
//   inputName: initialValues.textValue,
//   description: initialValues.description,
//   date: initialValues.date,
//   time: initialValues.hour,
//   schedule: initialValues.schedule,
//   type: initialValues.social,
// };