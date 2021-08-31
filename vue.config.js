'use strict'

const name = require('./package.json').name

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: `${name} Demo`
    }
  }
}
