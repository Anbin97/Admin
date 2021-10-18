const app = {
  state: {
    routerTab: [], // 主页tab
    sidebar: true // 左侧菜单栏是否展开
  },
  mutations: {
    SET_ROUTERTAB(state, params) {
      state.routerTab.push(params)
    },
    SET_FIRSTROUTERTAB(state, params) {
      state.routerTab.unshift(params)
    },
    EDIT_ROUTERTAB(state, params) {
      state.routerTab = params
    },
    SET_SIDEBAR_TYPE(state, type) {
      state.sidebar = type
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
  },
  actions: {
    // 设置tab
    setRouterTab({commit}, params){
      commit("SET_ROUTERTAB", params)
    },
    setFirstRouterTab({commit}, params){
      commit("SET_FIRSTROUTERTAB", params)
    },
    editRouterTab({commit}, params){
      commit("EDIT_ROUTERTAB", params)
    },
    // 设置左侧菜单
    setSidebar ({ commit }, type) {
      commit('SET_SIDEBAR_TYPE', type)
    },
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
  }
}

export default {
  ...app,
  namespaced: true
}