const buildJS = require('./core')
const buildStyles = require('./styles')

const main = async () => {
  await buildJS()
  await buildStyles()
}

main()
