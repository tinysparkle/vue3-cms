import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MyRequestInterceptors, MyRequestConfig } from './type'

class MyAxios {
  instance: AxiosInstance
  interceptors?: MyRequestInterceptors

  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 定制实例自身拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截器')
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应拦截器')
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request(config: MyRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res: any) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log('res: ', res)
      return res
    })
  }
}

export default MyAxios
