"use strict";

var express = require('express');
var app = express();
var routers = {};
var SortRouter = express.Router();
var CrunchRouter = express.Router();
routers.SortRouter = SortRouter;
routers.CrunchRouter = CrunchRouter;

require('./config.js')(app, express, routers);

require('../sort/sort_routes.js')(SortRouter);

require('../crunch/crunch_routes.js')(CrunchRouter);

module.exports = exports = app;