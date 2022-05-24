import path from 'path'
import { defineConfig, loadEnv, LibraryFormats } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import { peerDependencies, dependencies } from './package.json'

const externalPackages = [
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {})
]

// Creating regexes of the packages to make sure subpaths of the
// packages are also treated as external
const regexesOfPackages = externalPackages.map(
  (packageName) => new RegExp(`^${packageName}(/.*)?`)
)

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, 'env'))
  const format = env.VITE_BUILD_FORMAT

  return defineConfig({
    envDir: './env',
    build: {
      cssCodeSplit: false,
      outDir: `dist/${mode === 'es' ? 'es' : 'lib'}`,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        formats: [format as LibraryFormats]
      },
      rollupOptions: {
        output: {
          // dir: `dist/${mode === 'es' ? 'es' : 'lib'}`,
          preserveModules: true,
          entryFileNames: '[name].js'
        },
        // 确保外部化处理那些你不想打包进库的依赖
        external: regexesOfPackages
      },
      target: 'esnext',
      sourcemap: false
    },
    plugins: [
      vue(),
      vueJSX(),
      eslintPlugin() as never
    ],
    resolve: {
      alias: [
        { find: 'src', replacement: path.resolve(__dirname, 'src') },
        { find: '#', replacement: path.resolve(__dirname, 'examples') }
      ]
    }
  })
}
