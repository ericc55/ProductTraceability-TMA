const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'TuiSeki ~みんなで食安全を守ろう~',
    },
  }
})
