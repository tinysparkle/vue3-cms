import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/service/axios_demo'

const app: any = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
