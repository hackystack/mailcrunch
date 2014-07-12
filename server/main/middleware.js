"use strict";

/*
 * MiddleWare for the entire app
*/
var fs = require('fs');
var Imap = require('imap'),
    inspect = require('util').inspect;
var Parser = require('imap-parser');
var parser = new Parser();

module.exports = exports = {
  emailGetter: function(req, res, obj){
    if (req.method === 'GET'){
      var imap = new Imap({
        user: 'bizarroforrest',
        password: 'mailcrunch',
        host: 'imap.gmail.com',
        port: 993,
        tls: true
      });

      var openInbox = function(cb) {
        imap.openBox('INBOX', true, cb);
      }


      var headers;
      var allTheEmails = [];
      imap.once('ready', function() {
        openInbox(function(err, box) {
          if (err) throw err;
          imap.search([ 'UNSEEN', ['SINCE', 'July 09, 2014'] ], function(err, results){
            if (err) throw err;
             var fetched = imap.fetch(results, { struct: true, bodies: ['HEADER','TEXT'] });
             fetched.on('message', function(msg, seqno) {
              var bodyBuffer = '';
              var headerBuffer = '';
               msg.on('body', function(stream, info) {
                if (info.which === 'HEADER'){
                  stream.on('data', function(data){
                    headerBuffer += data;
                  });
                }
                if (info.which === 'TEXT'){
                  stream.on('data', function(data){
                    bodyBuffer += data.toString('utf8');
                  });
                  stream.once('end', function(){
                    headerBuffer = Imap.parseHeader(headerBuffer);
                  })
                 }
               })
               msg.on('end', function(){
                allTheEmails.push({headers: headerBuffer, body: bodyBuffer});
               });
            });
            fetched.once('end', function(){
              res.end(JSON.stringify(allTheEmails));
            })
          });
        });
      });
      
      imap.once('error', function(err) {
        console.log(err);
      });

      imap.once('end', function() {
        console.log('Connection ended');
      });

      imap.connect();
    }
  },

  logError: function (err, req, res, next) {
    if (err) {
      console.error(err);
      return next(err);
    }
    next();
  },

  handleError: function (err, req, res, next) {
    if (err) {
      res.send(err, 500);
    }
    next();
  },
  cors: function (req, res, next) {
    res.header('Access-Controll-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Controll-Allow-Header', 'Cotent-tyope, Authorization');

    if (req.method === 'Options') {
      res.send(200);
    } else {
      return next();
    }
    // I think the passport authentication needs to go here
  }
};