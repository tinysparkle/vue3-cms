import MyAxios from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new MyAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // interceptors: {
  //   requestInterceptor(config) {
  //     const token = ''
  //     if (token) {
  //       config.headers.token = token
  //     }
  //     console.log('实例自身的请求成功拦截器---', config)
  //     return config
  //   },
  //   requestInterceptorCatch(err) {
  //     console.log('实例自身的请求失败拦截器---', err)
  //     return err
  //   },
  //   responseInterceptor(config) {
  //     console.log('实例自身响应成功的响应拦截器---', config)
  //     return config
  //   },
  //   responseInterceptorCatch(err) {
  //     console.log('实例自身的响应失败拦截器---', err)
  //     return err
  //   },
  // },
})

export default request
