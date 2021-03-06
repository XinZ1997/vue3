import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/home.vue'),
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router
