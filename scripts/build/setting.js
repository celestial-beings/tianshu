const path = require('path')
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

module.exports = {
  outDir: 'dist',
  baseConfig: defineConfig({
    plugins: [vue, vueJsx],
    resolve: {
      alias: [
        { find: 'src', replacement: path.resolve(__dirname, '../../src') }
      ]
    }
  })
}
