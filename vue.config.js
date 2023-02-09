const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  pages: {
    index: {
      entry: './src/pages/index/main.js',
      template: './public/index.html',
      filename: 'index.html'
    },
    login: {
      entry: './src/pages/login/login.js',
      template: './public/login.html',
      filename: 'login.html',
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
})
