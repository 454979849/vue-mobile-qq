import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: [
        {path: '/', redirect: '/welcome'},
        {path: '/welcome', component: () => import('@/views/welcome/index')},
        {path: '/login', component: () => import('@/views/login/index')},
        {path: '/register', component: () => import('@/views/register/index')},
        {path: '/message/:userId', component: () => import('@/views/message/index')},
        {path: '/friend/:userId', component: () => import('@/views/friend/index')},
        {path: '/dynamic/:userId', component: () => import('@/views/dynamic/index')},
    ]
})