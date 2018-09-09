const request = require('../utils').request
const config = require('../configs')
const debug = require('debug')('Code-dog-control')
const _ = require('lodash')

function decode(s) {
  return decodeURIComponent(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}
exports.getPage = async function (id) {
  return await request.get(config.catUrl + id, config.catHeaders)
    .then(res => {
      let page = res.data
      const head = 'g_page_config ='
      const end = 'g_srp_loadCss();'
      const headIndex = page.indexOf(head)
      page = page.substr(headIndex, page.length)
      const endIndex = page.indexOf(end)
      const target = page.substr(head.length, endIndex - 21)
      if (_.isEmpty(target)) {
          return {}
      }
      debug('target ,', target)
      const targetSource = eval("(" + target + ")");
      const bookList = _.get(targetSource, 'mods.itemlist.data.auctions')
      debug('result ,', bookList)
      return bookList
    })
    .catch(e => debug(e))
}
