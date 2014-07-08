"use strict";

var Crunch = require('./crunch_model.js'),
    Q    = require('q');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Crunch.find, Crunch);
    $promise()
      .then(function (crunch) {
        res.json(crunch);
      })
       .fail(function (reason) {
        next(reason);
      });
  },

  post: function (req, res, next) {
    var crunch = req.body.crunch;
    var $promise = Q.nbind(Crunch.create, Crunch);
    $promise(crunch)
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  }
};