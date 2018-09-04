const koa = require('koa');
const middleware = require('./middleware');
const debug = require('debug')('Code-server');

function Server(option) {
  this.opts = option || {};
}

Server.prototype = new koa();

Server.prototype.start = function () {
  const port = process.env.PORT || this.opts.port || 3000;
  this.keys = ['barcode'];
  this.proxy = true;
  this.use(middleware.cors({
    'origin': '*',
    'headers': 'access,content-type,x-auth-token'
  }));
  this.use(middleware.bodyParser());
  this.use(middleware.logger());
  this.use(middleware.responseTime());
  this.use(middleware.router.routes());
  this.use(middleware.router.allowedMethods());
  this.listen(port, function () {
    debug('server start up in ' + (port));
  });
};


Server.prototype.errHandle = function (callback) {
  process.on('uncaughtException', callback);
  process.on('exception', callback);
  process.on('Exception', callback);
  process.on('ReferenceError', callback);
  process.on('ENOENT', callback);
  process.on('error', callback)
};

module.exports = Server;
