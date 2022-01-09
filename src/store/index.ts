import Store from './store'
import module1 from './modules/module1'

const store = new Store({
  state: {
    name: 'i am root'
  },
  getters: {
    name2 ({ state }, { module1 }) {
      return state.name + ', ' + module1.getters.name2
    }
  },
  mutations: {
    setName ({ state }, value) {
      state.name = value
    }
  },
  actions: {
    async initName ({ commit }, value, moudles) {
      console.log(moudles)
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
