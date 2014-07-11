"use strict";

var Sort = require('./sort_model.js'),
    Q    = require('q');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Sort.find, Sort);
    $promise()
      .then(function (sort) {
        res.json(sort);
      })
       .fail(function (reason) {
        next(reason);
      });
  },

  post: function (req, res, next) {
    var sort = req.body.sort;
    var $promise = Q.nbind(Sort.create, Sort);
    $promise(sort)
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  }
};