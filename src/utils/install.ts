import type { App, Component } from 'vue'
import * as Components from '../components'
import './theme/init'

interface IInstallOptions {
  components: Component[];
}

const install: (app: App, options?: IInstallOptions) => void = (app, options) => {
  const components = (Array.isArray(options?.components) && options?.components?.length)
    ? options?.components
    : Object.keys(Components).map(key => Components[key])

  components.forEach((component) => {
    const lowerCaseName = component?.name || ''
    const upperCaseName = lowerCaseName.replace(/(?<=(sj)?-)\w/g, (value) => {
      return value.toUpperCase()
    }).replace(/(sj)?-/g, '')
    app.component(lowerCaseName, component)
    app.component(upperCaseName, component)
  })
}

export default install
