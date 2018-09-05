const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('./database')();
const passport = require('./passport');
const authRouter = require('../routes/authRouter');
const noteRouter = require('../routes/noteRouter');

const createApp = () => {
  const app = express();
  app.use(express.static('.'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(passport.initialize());
  app.use('/api', authRouter);
  app.use('/api/note', noteRouter);
  return app;
};

module.exports = createApp;
