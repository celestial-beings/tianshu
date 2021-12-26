import { reactive } from 'vue'

class Store {
  private stores: IStores

  constructor ({ state = {}, getters = {}, mutations = {}, actions = {}, modules = {} }: IStoreOptions) {
    this.stores = {
      root: {
        state: reactive(state),
        commit: Object.keys(mutations).reduce((pre: ICommit, key: string) => {
          pre[key] = (value?: unknown): void => {
            mutations[key](this.stores.root.state, value)
          }
          return pre
        }, {}),
        dispatch: Object.keys(actions).reduce((pre: IDispatch, key: string) => {
          pre[key] = (value?: unknown): Promise<unknown> => {
            return actions[key](this.stores.root.commit || {}, value)
          }
          return pre
        }, {})
      }
    }
    Object.keys(modules).forEach(key => {
      const namespace = modules[key].name || key
      const { state = {}, mutations = {}, actions = {} } = modules[key]
      this.stores[namespace] = {
        state: reactive(state),
        commit: Object.keys(mutations).reduce((pre: ICommit, key: string) => {
          pre[key] = (value: unknown): void => {
            mutations[key](this.stores[namespace].state, value)
          }
          return pre
        }, {}),
        dispatch: Object.keys(actions).reduce((pre: IDispatch, key: string) => {
          pre[key] = (value: unknown): void => {
            actions[key](this.stores[namespace].commit, value)
          }
          return pre
        }, {})
      }
    })
  }

  useStore (namespace?: string | undefined): [IState, ICommit, IDispatch] {
    if (typeof namespace !== 'string' && typeof namespace !== 'undefined') {
      console.error(new Error('please enter a string or undefined type parameter'))
      return [{}, {}, {}]
    }

    namespace = namespace || 'root'

    const store: IStore = this.stores[namespace]

    if (!store) {
      console.error(new Error(`${namespace} namespace not found. please check whether the namespace entered exists.`))
      return [{}, {}, {}]
    }

    const { state, commit, dispatch } = store
    return [state, commit, dispatch]
  }
}

export default Store
