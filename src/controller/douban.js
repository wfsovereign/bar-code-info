const request = require('../utils').request
const config = require('../configs')
const debug = require('debug')('Code-dog-control')
const cheerio = require('cheerio')

exports.getPage = function () {
  request.get(config.doubanUrl + '9787505734227', config.doubanHeaders)
    .then(res => {
      const page = res.data
      debug('page ,', page)
      // const $ = cheerio.load(page, { decodeEntities: false })
      // const bookListElement = $('#J_goodsList .gl-warp .gl-item')
      // const bookList = []
      //
      // bookListElement.map(function (i, el) {
      //   debug('i ', i)
      //   debug('i el', $(el).html())
      //   const item = $(el)
      //   const price = item.find('.p-price').text().trim()
      //   const link = item.find('.p-img a img').attr('source-data-lazy-img')
      //   const name = item.find('.p-name a em').text()
      //   const detailLink = item.find('.p-name a').attr('href')
      //   bookList.push({
      //     price,
      //     link: 'https:' + link,
      //     name,
      //     detailLink: 'https:' + detailLink
      //   })
      // })
      //
      // debug('result ,', bookList)
    })
    .catch(e => debug(e))
}
