// build/build.es.js
// node包，commonjs规范
const path = require('path')
const { build } = require('vite')
const baseConfig = require('./base.config')
const { peerDependencies, dependencies } = require('../../package.json')

const externalPackages = [
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {})
]

// Creating regexes of the packages to make sure subpaths of the
// packages are also treated as external
const regexesOfPackages = externalPackages.map(
  (packageName) => new RegExp(`^${packageName}(/.*)?`)
)

const BUILD_FORMATS = ['es', 'cjs']

const buildJS = () => {
  BUILD_FORMATS.forEach((format) => {
    /**
   * rollup配置
   */
    const rollupOptions = {
      output: {
        preserveModules: true,
        entryFileNames: `[name].${format === 'es' ? 'mjs' : 'js'}`,
        global: {
          vue: 'Vue'
        }
      },
      // 确保外部化处理那些你不想打包进库的依赖
      external: regexesOfPackages
    }
    build({
      ...baseConfig,
      build: {
        cssCodeSplit: false,
        outDir: `dist/${format === 'es' ? format : 'lib'}`,
        lib: {
          entry: path.resolve(__dirname, '../../src/index.ts'),
          formats: [format]
        },
        rollupOptions,
        sourcemap: false
      }
    })
  })
}

module.exports = buildJS
