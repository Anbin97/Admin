import Vue from 'vue'
import Router from 'vue-router'
import { Layout } from "@/layouts"
import vuemodule from "./vuemodule/router"
Vue.use(Router)

const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      // 第一位为home，请勿修改
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/'),
        meta: { title: '首页', icon: 'home' }
      },
      ...vuemodule
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { hiddenTab: true }
  },
  {
    path: '/404',
    name: 404,
    component: () => import('@/views/404'),
    meta: { hiddenTab: true }
  },
  {
    path: '*',
    redirect: '/404',
  }
]

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: asyncRouterMap
})