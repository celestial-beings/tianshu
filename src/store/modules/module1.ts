import store from '../index'

export default {
  name: 'module1',
  state: {
    sex: 'i am man'
  },
  mutations: {
    setSex (state: IState, value: unknown) {
      state.sex = value
    }
  },
  actions: {
    async initSex (commit: ICommit, value: unknown) {
      const { setSex } = commit
      const root = store.useStore()
      setTimeout(() => {
        setSex(value)
        root[1].setName('i am root change in module1')
      }, 10000)
    }
  }
}
