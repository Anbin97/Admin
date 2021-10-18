import router from "./index"
import store from "@/store"
router.beforeEach((to, from, next) => {
  setRouterTab(to)
  next()
})
// 设置路由tab
function setRouterTab(to) {
  const routerTab = store.getters.routerTab
  routerTab.every(item => {
    return item.name !== to.name
  }) && !to.meta.hiddenTab && store.dispatch("app/setRouterTab", to)
  if(routerTab[0].name !== "home") {
    store.dispatch("app/setFirstRouterTab", router.options.routes[0].children[0])
  }
}