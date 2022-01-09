import { reactive, computed, readonly } from 'vue'

class Store {
  private stores: IStores

  constructor ({ state = {}, getters = {}, mutations = {}, actions = {}, modules = {} }: IStoreOptions) {
    const tempModules: IModules = {
      root: {
        state,
        getters,
        mutations,
        actions
      },
      ...modules
    }
    this.stores = {}

    Object.keys(tempModules).forEach(key => {
      const namespace = tempModules[key].name || key
      const { state = {}, getters = {}, mutations = {}, actions = {} } = tempModules[key]
      const moduleState = reactive(state)
      this.stores[namespace] = {
        state: moduleState,
        getters: Object.keys(getters).reduce((pre: _IGetters, key:string) => {
          const getArguments: () => [IGetterContext, IGetterOtherContexts] = () => {
            const context: IGetterContext = {
              state: readonly(moduleState),
              getters: readonly(this.stores[namespace].getters)
            }
            const otherContexts = Object.keys(this.stores).reduce((pre: IGetterOtherContexts, key: string) => {
              if (key !== namespace) {
                pre[key] = {
                  state: readonly(this.stores[key].state),
                  getters: readonly(this.stores[key].getters)
                }
              }
              return pre
            }, {})
            return [context, otherContexts]
          }
          pre[key] = computed(() => getters[key](...getArguments()))
          return pre
        }, {}),
        commit: Object.keys(mutations).reduce((pre: ICommit, key: string) => {
          pre[key] = (value, otherContexts) => {
            const context = {
              state: this.stores[namespace].state,
              getters: readonly(this.stores[namespace].getters),
              commit: readonly(this.stores[namespace].commit)
            }
            if (!otherContexts) return mutations[key](context, value)
            const modules = Object.keys(this.stores).reduce((pre: IMutationOtherContexts, key: string) => {
              if (key !== namespace) {
                pre[key] = {
                  state: readonly(this.stores[key].state),
                  getters: readonly(this.stores[key].getters),
                  commit: readonly(this.stores[key].commit)
                }
              }
              return pre
            }, {})

            return mutations[key](context, value, modules)
          }
          return pre
        }, {}),
        dispatch: Object.keys(actions).reduce((pre: IDispatch, key: string) => {
          pre[key] = (value, otherContexts) => {
            const context = {
              state: readonly(this.stores[namespace].state),
              getters: readonly(this.stores[namespace].getters),
              commit: readonly(this.stores[namespace].commit),
              dispatch: readonly(this.stores[namespace].dispatch)
            }
            if (!otherContexts) return actions[key](context, value)
            const modules = Object.keys(this.stores).reduce((pre: IActionOtherContext, key: string) => {
              if (key !== namespace) {
                pre[key] = {
                  state: readonly(this.stores[key].state),
                  getters: readonly(this.stores[key].getters),
                  commit: readonly(this.stores[key].commit),
                  dispatch: readonly(this.stores[key].dispatch)
                }
              }
              return pre
            }, {})
            return actions[key](context, value, modules)
          }
          return pre
        }, {})
      }
    })
  }

  useStore (namespace?: string | undefined): ReadonlyStore {
    const errorReturn: ReadonlyStore = ({} as ReadonlyStore)
    if (typeof namespace !== 'string' && typeof namespace !== 'undefined') {
      console.error(new Error('please enter a string or undefined type parameter'))
      return errorReturn
    }

    namespace = namespace || 'root'

    const store: ReadonlyStore = this.stores[namespace]

    if (!store) {
      console.error(new Error(`${namespace} namespace not found. please check whether the namespace entered exists.`))
      return errorReturn
    }
    return {
      state: readonly(store.state),
      getters: readonly(store.getters),
      commit: readonly(store.commit),
      dispatch: readonly(store.dispatch)
    }
  }

  useState (namespace?: string | undefined): Readonly<IState> {
    const errorReturn = {}
    if (typeof namespace !== 'string' && typeof namespace !== 'undefined') {
      console.error(new Error('please enter a string or undefined type parameter'))
      return errorReturn
    }

    namespace = namespace || 'root'

    const state = this.stores[namespace].state

    if (!state) {
      console.error(new Error(`the state object not found in ${namespace} namespace. please check whether the namespace entered exists.`))
      return errorReturn
    }
    return readonly(state)
  }

  useGetters (namespace?: string | undefined): Readonly<_IGetters> {
    const errorReturn = {}
    if (typeof namespace !== 'string' && typeof namespace !== 'undefined') {
      console.error(new Error('please enter a string or undefined type parameter'))
      return errorReturn
    }

    namespace = namespace || 'root'

    const getters = this.stores[namespace].getters

    if (!getters) {
      console.error(new Error(`the getters object not found in ${namespace} namespace. please check whether the namespace entered exists.`))
      return errorReturn
    }
    return readonly(getters)
  }

  useCommit (namespace?: string | undefined): Readonly<ICommit> {
    const errorReturn = {}
    if (typeof namespace !== 'string' && typeof namespace !== 'undefined') {
      console.error(new Error('please enter a string or undefined type parameter'))
      return errorReturn
    }

    namespace = namespace || 'root'

    const commit = this.stores[namespace].commit

    if (!commit) {
      console.error(new Error(`the commit object not found in ${namespace} namespace. please check whether the namespace entered exists.`))
      return errorReturn
    }
    return readonly(commit)
  }

  useDispatch (namespace?: string | undefined): Readonly<IDispatch> {
    const errorReturn = {}
    if (typeof namespace !== 'string' && typeof namespace !== 'undefined') {
      console.error(new Error('please enter a string or undefined type parameter'))
      return errorReturn
    }

    namespace = namespace || 'root'

    const dispatch = this.stores[namespace].dispatch

    if (!dispatch) {
      console.error(new Error(`the dispatch object not found in ${namespace} namespace. please check whether the namespace entered exists.`))
      return errorReturn
    }
    return readonly(dispatch)
  }
}

export default Store
