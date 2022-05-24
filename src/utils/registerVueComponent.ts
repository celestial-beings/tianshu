import type { App, Component } from 'vue'

const registerVueComponent: (app: App, component: Component) => void = (app, component) => {
  const lowerCaseName = component?.name || ''
  const upperCaseName = lowerCaseName.replace(/(?<=(sj)?-)\w/g, (value) => {
    return value.toUpperCase()
  }).replace(/(sj)?-/g, '')
  app.component(lowerCaseName, component)
  app.component(upperCaseName, component)
}

export default registerVueComponent
