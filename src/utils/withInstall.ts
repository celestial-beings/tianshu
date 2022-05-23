import type { App } from 'vue'
import install from 'src/utils/install'

export default (component) => {
  (component as any).install = (app: App) => {
    install(app, { components: [component] })
  }

  return component
}
