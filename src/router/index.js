import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/plugin-manage/index.js')
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router