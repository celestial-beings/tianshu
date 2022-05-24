const path = require('path')
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, '../../src') }
    ]
  }
})

module.exports = baseConfig
