import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MyRequestInterceptors, MyRequestConfig } from './type'
import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true // loading默认显示
class MyAxios {
  instance: AxiosInstance
  interceptors?: MyRequestInterceptors
  loading?: any
  showLoading: boolean

  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'loading...',
            background: 'rgba(0, 0, 0, 0.5)',
          })
        }
        // console.log('全局请求拦截器')
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 清除loading
        this.loading?.close()
        // console.log('全局响应拦截器')
        return res.data
      },
      (err) => {
        // 清除loading
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: MyRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.instance
        .request(config)
        .then((res: any) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
          // 重置loading为默认状态
          this.showLoading = DEFAULT_LOADING
        })
        .catch((err) => {
          reject(err)
          // 重置loading为默认状态
          this.showLoading = DEFAULT_LOADING
        })
    })
  }

  get<T>(config: MyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: MyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: MyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: MyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default MyAxios
