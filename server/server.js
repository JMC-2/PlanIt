const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routers/api.js');
const loginRouter = require('./routers/login.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('we should see this ');
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})

app.use('/api', apiRouter);
app.use('/user', loginRouter);

 
// error handlers
//local error handler
app.use((req, res) => {
  // do we want a 404 page or a error message?
  res.status(404).json({});
});

// global error handler
app.use((req, res, err, next) => {
  const defaultErr = {
    status: 500,
    log: 'there is an error in an unidentified middleware',
    message:'there is a server error'
  };
  const customErr = Object.assign(defaultErr, err);
  res.send(customErr.status).json(customErr.message);
})

app.listen(3000, () => console.log('listening on port 3000'));