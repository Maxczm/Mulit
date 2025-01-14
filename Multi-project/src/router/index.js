import { createRouter, createWebHistory } from 'vue-router'
import { cancelAllRequests } from '@/untils/cancel_request'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 路由切换时取消所有pending的请求
  cancelAllRequests()
  next()
})

export default router
