import { RouteView } from "@/layouts"
export default [
  {
    path: 'vuemodule',
    name: 'vuemodule',
    component: RouteView,
    meta: { title: 'vue模块', icon: 'box-plot' },
    children: [
      {
        path: 'render',
        name: 'vuemodule.render',
        component: () => import('@/views/vuemodule'),
        meta: { title: 'demo', keepAlive: true },
      },
      {
        path: 'render1',
        name: 'vuemodule.render1',
        component: () => import('@/views/vuemodule'),
        meta: { title: 'demo', keepAlive: true },
      },
    ]
  }
]