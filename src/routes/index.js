var debug = require('debug')('Code-routes')
var Router = require('koa-router')
var MainRouter = new Router()
var controller = require('../controller')

MainRouter.get('/', async function (ctx) {
  const result = await controller.helloWorld()
  debug('result ,', result)
  ctx.body = 'hello darling'
})

module.exports = MainRouter
