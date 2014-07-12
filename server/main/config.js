"use strict";

var mongoose    = require('mongoose'),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    middle      = require('./middleware'),
    passport    = require('passport');

mongoose.connect(process.env.DB_URL || 'mongodb://localhost/myApp');
/*
 * Include all your global env variables here.
*/
module.exports = exports = function (app, express, routers) {
  app.set('port', process.env.PORT || 3000);
  app.set('base url', process.env.URL || 'http://localhost');
  app.use(morgan('dev'));
  app.use(middle.cors);
  app.use(express.static(__dirname + '/../../client'));
  app.use('/sort', routers.SortRouter);
  app.use('/crunch', routers.CrunchRouter);
  app.use(middle.logError);
  app.use(middle.emailGetter);
  app.use(middle.handleError);
};

