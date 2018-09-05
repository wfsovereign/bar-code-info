var debug = require('debug')('Code-routes')
var Router = require('koa-router')
var MainRouter = new Router()
var controller = require('../controller')

MainRouter.get('/', async function (ctx) {
  const dog = await controller.dogController.getPage()
  const douban = await controller.doubanController.getPage()
  ctx.body = 'hello darling'
})

module.exports = MainRouter
