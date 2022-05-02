import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import vueJSX from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJSX(),
    eslintPlugin() as never
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'examples') }]
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv, postcssNested]
    }
  }
})
