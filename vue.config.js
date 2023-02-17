const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js'
    }
  }
})


