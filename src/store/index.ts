import Store from './store'
import module1 from './modules/module1'

const store = new Store({
  state: {
    name: 'i am root'
  },
  mutations: {
    setName (state, value) {
      state.name = value
    }
  },
  actions: {
    async initName (commit, value) {
      const { setName } = commit
      setTimeout(() => {
        setName(value)
      }, 5000)
    }
  },
  modules: {
    module1
  }
})

export default store
