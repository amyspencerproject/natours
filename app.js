const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARE
app.use(morgan('dev'));

app.use(express.json());

// this is just an example of how to serve static files
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// mount the router
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users/', userRouter);

module.exports = app;
