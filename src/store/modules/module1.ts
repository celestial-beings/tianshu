export default {
  name: 'module1',
  state: {
    name: 'i am module1'
  },
  getters: {
    name2 ({ state }: IGetterContext) {
      return state.name + '_getter'
    }
  },
  mutations: {
    setName ({ state }: IMutationContext, value: unknown) {
      state.name = value
    }
  },
  actions: {
    async initName ({ commit }: IActionContext, value: unknown) {
      const { setName } = commit
      setTimeout(() => {
        setName(value)
      }, 5000)
    }
  }
}
