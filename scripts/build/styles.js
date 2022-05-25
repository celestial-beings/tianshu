const fg = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')
const { build } = require('vite')
const { outDir, baseConfig } = require('./setting.js')

const runBuild = async (entry) => {
  await build({
    ...baseConfig,
    build: {
      outDir: `${outDir}/${entry}`,
      lib: {
        entry: path.resolve(__dirname, `../../${entry}/index.ts`),
        formats: ['es']
      },
      rollupOptions: {
        output: {
          assetFileNames: '[name].[ext]'
        }
      },
      sourcemap: false
    }
  })
}

const copyStyleFile = async (entry) => {
  await Promise.all(['es', 'lib'].map(el => fs.copy(entry, entry.replace('src', el))))
}

const removeTempResources = async () => {
  await fs.remove(`${outDir}/src`)
}

const buildStyles = async () => {
  /**
   * build style file
   */
  const buildEntries = await fg('src/components/**', { onlyFiles: false, globstar: false, onlyDirectories: true })
  await Promise.all(buildEntries.map(enrty => runBuild(enrty)))
  /**
   * move style file
   */
  const moveEntries = await fg(`${outDir}/src/components/**/style.css`, { onlyFiles: true, globstar: false })
  await Promise.all(moveEntries.map(enrty => copyStyleFile(enrty)))
  /**
   * remove temp resource
   */
  await removeTempResources()
}

module.exports = buildStyles
