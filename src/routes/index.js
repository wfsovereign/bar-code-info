var debug = require('debug')('Code-routes')
var Router = require('koa-router')
const _ = require('lodash')
var MainRouter = new Router()
var controller = require('../controller')

MainRouter.get('/', async function (ctx) {
  const isbn = _.get(ctx, 'request.query.id')
  if (_.isNil(isbn)) {
    return ctx.body = 'hello darling'
  }
  // const dog = await controller.dogController.getPage()
  // const douban = await controller.doubanController.getPage()
  const cat = await controller.catController.getPage(isbn)
  ctx.body = cat
})

module.exports = MainRouter
