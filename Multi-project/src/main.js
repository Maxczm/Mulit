import './scss/index.scss'
import 'nprogress/nprogress.css'  
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import 'animate.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 将 NProgress 挂载到 Vue 原型上
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);//pinia数据持久化
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
