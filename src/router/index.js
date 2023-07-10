import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/home',
    name: 'home2',
    component: HomeView, AboutView
  },
  {
    path: '/about',
    name: 'about2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  // base: window.__POWERED_BY_QIANKUN__ ? '/code' : '/', // 重点4：qiankun进入子应用时，返回true,
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/code2' : '/'),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
