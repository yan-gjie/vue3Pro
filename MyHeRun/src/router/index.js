// 导入组件
import {createRouter, createWebHistory} from "vue-router"
import routes from './routes/index'


//创建一个vue-router的对象
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 暴露
export default router