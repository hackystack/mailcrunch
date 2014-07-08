"use strict";

var express = require('express');
var app = express();
var routers = {};
var NoteRouter = express.Router();
var CrunchRouter = express.Router();
routers.NoteRouter = NoteRouter;
routers.CrunchRouter = CrunchRouter;

require('./config.js')(app, express, routers);

require('../note/note_routes.js')(NoteRouter);

require('../crunch/crunch_routes.js')(CrunchRouter);

module.exports = exports = app;