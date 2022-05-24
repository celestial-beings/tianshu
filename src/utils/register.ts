import type { App, Component } from 'vue'

type Install = (app: App) => void
type Register = (components: Component[]) => { install: Install; }

const register: Register = (components) => {
  const install: Install = (app) => {
    components.forEach((component) => {
      (component as any).install(app)
    })
  }
  return { install }
}

export default register
