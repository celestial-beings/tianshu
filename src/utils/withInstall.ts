import type { App, Component } from 'vue'
import './theme/init'
import registerVueComponent from 'src/utils/registerVueComponent'

interface IComponent {
  install: (app: App) => void;
  [preopName: string]: any;
}

type WithInstall = (component: Component) => IComponent

const withInstall: WithInstall = (component) => {
  return {
    install: (app: App) => {
      registerVueComponent(app, component)
    },
    ...component
  }
}

export default withInstall
