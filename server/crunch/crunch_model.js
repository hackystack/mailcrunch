"use strict";

var mongoose = require('mongoose');

var CrunchSchema = new mongoose.Schema({
  content: String,

  title: {
    type: String,
    required: true
  }
});

module.exports = exports = mongoose.model('crunch', CrunchSchema);