const path = require('path')

const resolve = (src) => path.resolve(__dirname, '../', src)

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  resolve,
  isProd
}