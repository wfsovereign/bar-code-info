process.env.DEBUG = 'Code-*';

var Server = require('./src');
var server = new Server();
var debug = require('debug')('Code-app');

server.start();

server.errHandle(function(err) {
  debug(err);
});

module.exports = server.start;

