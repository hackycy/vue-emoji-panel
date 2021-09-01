'use strict'
const path = require('path')

const name = require('./package.json').name

function resolve(dir) {
  return path.join(__dirname, dir)
}

const libSrc = resolve('lib/src')

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
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('examples'),
        'emoji-popover': libSrc
      }
    }
  },
  chainWebpack: (config) => {
    // 扩展配置
    config.module.rule('js').include.add(libSrc).end()
  }
}
