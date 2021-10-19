import router from "./index"
import store from "@/store"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.fullPath === '/login') {
    store.dispatch("app/editRouterTab", [])
  } else {
    setRouterTab(to)
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
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