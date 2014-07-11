
"use strict";

var mongoose = require('mongoose');

var SortSchema = new mongoose.Schema({
  content: String,

  title: {
    type: String,
    required: true
  }
});

module.exports = exports = mongoose.model('sorts', SortSchema);