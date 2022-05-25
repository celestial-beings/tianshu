const path = require('path')
const fs = require('fs-extra')
const { build } = require('vite')
const { outDir, baseConfig } = require('./setting.js')
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

const buildJS = async () => {
  await fs.remove(outDir)
  BUILD_FORMATS.forEach((format) => {
    build({
      ...baseConfig,
      build: {
        outDir: `${outDir}/${format === 'es' ? format : 'lib'}`,
        lib: {
          entry: path.resolve(__dirname, '../../src/index.ts'),
          formats: [format]
        },
        rollupOptions: {
          output: {
            preserveModules: true,
            entryFileNames: `[name].${format === 'es' ? 'mjs' : 'js'}`
          },
          // 确保外部化处理那些你不想打包进库的依赖
          external: regexesOfPackages
        },
        sourcemap: false
      }
    })
  })
}

module.exports = buildJS
