import type { AxiosRequestConfig } from 'axios'

export interface MyRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  responseInterceptorCatch?: (err: any) => any
}

export interface MyRequestConfig extends AxiosRequestConfig {
  interceptors?: MyRequestInterceptors
  showLoading?: boolean
}
