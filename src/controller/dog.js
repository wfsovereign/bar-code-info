const request = require('../utils').request
const config = require('../configs')
const debug = require('debug')('Code-dog-control')
const cheerio = require('cheerio')

exports.getPage = function (id) {
  return request.get(config.dogUrl + id, config.dogHeaders)
    .then(res => {
      const page = res.data
      const $ = cheerio.load(page, { decodeEntities: false })
      const bookListElement = $('#J_goodsList .gl-warp .gl-item')
      const bookList = []

      bookListElement.map(function (i, el) {
        const item = $(el)
        const price = item.find('.p-price').text().trim()
        const link = item.find('.p-img a img').attr('source-data-lazy-img')
        const name = item.find('.p-name a em').text()
        const detailLink = item.find('.p-name a').attr('href')
        bookList.push({
          price,
          link: 'https:' + link,
          name,
          detailLink: 'https:' + detailLink
        })
      })
      debug('result ,', bookList)
      return bookList
    })
    .catch(e => debug(e))
}
