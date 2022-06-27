import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './service'

const app: any = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

request.request({
  method: 'get',
  url: '/home/multidata',
  // interceptors: {
  //   requestInterceptor(config) {
  //     console.log('请求自身的请求拦截器')
  //     return config
  //   },
  //   responseInterceptor(config) {
  //     console.log('请求自身的响应拦截器')
  //     return config
  //   },
  // },
})
