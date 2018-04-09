export default {
  namespaced: true,
  state: {
    transitionName: ''
  },
  mutations: {
    setTransition (state, transition) {
      state.transitionName = transition
    }
  }
}
