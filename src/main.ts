import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'normalize.css'
import '@/assets/css/index.less'

// import request from './service'

const app: any = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

// interface IData {
//   returnCode: string
//   data: any
// }

// request
//   .get<IData>({
//     url: '/home/multidata',
//     showLoading: false,
//     interceptors: {
//       requestInterceptor(config) {
//         console.log('请求自身的请求拦截器')
//         return config
//       },
//       responseInterceptor(res) {
//         console.log('请求自身的响应拦截器')
//         return res
//       },
//     },
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
