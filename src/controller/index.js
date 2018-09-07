var debug = require('debug')('Code-controller');

exports.helloWorld = function () {
  debug('hello world')
  return 'hello world'
}

exports.dogController = require('./dog')
exports.doubanController = require('./douban')
exports.catController = require('./cat')
