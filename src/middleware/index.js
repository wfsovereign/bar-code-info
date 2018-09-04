exports.logger = require('koa-logger'); //用于打印访问日志
exports.responseTime = require('koa-response-time');
exports.bodyParser = require('koa-bodyparser');
exports.accessAllow = require('./access_allow_origin');
exports.cors = require('koa-cors');
exports.router = require('../routes');
