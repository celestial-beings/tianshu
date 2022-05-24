import type { App } from 'vue'
import * as Components from '../components'

const install: (app: App) => void = (app) => {
  Object.keys(Components).forEach((key) => {
    const component = Components[key]
    component.install(app)
  })
}

export default install
