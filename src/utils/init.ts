import type { App, Component } from 'vue'
import Components from '../components'

interface IInitOptions {
  [propName: string]: any;
}

interface IRegisterOptions {
  namePrefix?: string;
}

interface IComponent {
  component: Component;
  registerName?: string;
}

type RegisterComponent = IComponent | Component

let partialImportedComponents: IComponent[] = []

const register: (components: RegisterComponent | RegisterComponent[], options?: IRegisterOptions) => void = (components, options) => {
  if (!Array.isArray(components)) {
    components = [components]
  }

  partialImportedComponents = components.map((item) => {
    if (item?.component) {
      if (!item?.registerName) {
        item.registerName = options?.namePrefix ? `${options?.namePrefix}-${item?.component?.name}` : item?.component?.name
      }
      return item
    }
    return {
      component: item,
      registerName: options?.namePrefix ? `${options?.namePrefix}-${item?.name}` : item?.name
    }
  })
}

const install: (app: App, options: IInitOptions) => void = (app, options) => {
  // register global component which is partial imported
  if (partialImportedComponents?.length) {
    partialImportedComponents.forEach((item) => {
      app.component(item?.registerName as string, item?.component)
    })
    return
  }

  // register global component with all imported
  Object.keys(Components).forEach((key) => {
    const component = Components[key]
    const lowerCaseName = component?.name || ''
    const upperCaseName = lowerCaseName.replace(/(?<=(sj)?-)\w/g, (value) => {
      return value.toUpperCase()
    }).replace(/(sj)?-/g, '')
    app.component(lowerCaseName, component)
    app.component(upperCaseName, component)
  })
}

export default {
  install,
  register,
  ...Components
}
