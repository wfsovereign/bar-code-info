const axios = require('axios')

const instance = axios.create({
  timeout: 3000,
})

module.exports = instance
