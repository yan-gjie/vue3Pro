import { createApp } from 'vue'
import App from './App.vue'
import '@/css/base.css'
import '@/assets/iconfont/iconfont.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'

createApp(App).use(ElementPlus).use(router).mount('#app')
