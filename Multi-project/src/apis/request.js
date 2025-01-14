import axios from 'axios'
import { cancelRequest, removeRequest } from '@/untils/cancel_request'

// 创建axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 取消重复请求
    cancelRequest(config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 请求完成后移除pending状态
    removeRequest(response.config)
    return response.data
  },
  error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message)
    } else {
      removeRequest(error.config)
    }
    return Promise.reject(error)
  }
)

export default service 