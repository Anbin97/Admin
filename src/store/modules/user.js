const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    SET_USERINFO(state, params) {
      state.userInfo = params
    },
  },
  actions: {
    setUserInfo({commit}, params){
      commit("SET_USERINFO", params)
    },
    logout({commit}, params){
      commit("SET_USERINFO", {})
    }
  }
}

export default {
  ...user,
  namespaced: true
}