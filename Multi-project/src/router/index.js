import { createRouter, createWebHistory } from 'vue-router'
import { cancelAllRequests } from '@/untils/cancel_request'
import NProgress from 'nprogress'   // 导入 nprogress

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/ppt',
      name: 'ppt',
      component: () => import('@/views/PPT/index.vue'),
      meta: {
        title: 'PPT'
      }
    },
    {
      path: '/ai',
      name: 'ai',
      component: () => import('@/views/AI/index.vue'),
      meta: {
        title: 'AI'
      }
    },
    {
      path:'/detail',
      name:'detail',
      component:()=>import('@/views/Detail/index.vue'),
      meta: {
        title: '详情'
      }
    }
  ]
})
NProgress.configure({
  showSpinner: true,
})
router.beforeEach((to, from, next) => {
  // 路由切换时取消所有pending的请求
  cancelAllRequests()
  try {
    NProgress.start()
  } catch (err) {
    console.log(err)
  }
  next()
})
router.afterEach((to, from) => {
  document.title = to.meta.title
  NProgress.done()   // 关闭进度条
})

export default router
