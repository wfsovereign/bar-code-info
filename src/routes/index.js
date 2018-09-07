var debug = require('debug')('Code-routes')
var Router = require('koa-router')
var MainRouter = new Router()
var controller = require('../controller')

MainRouter.get('/', async function (ctx) {
  // const dog = await controller.dogController.getPage()
  // const douban = await controller.doubanController.getPage()
  const cat = await controller.catController.getPage()
  ctx.body = cat
})

module.exports = MainRouter
