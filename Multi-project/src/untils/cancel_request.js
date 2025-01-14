import axios from 'axios'

// 存储pending的请求
const pendingRequests = new Map()

/**
 * 生成请求的唯一key
 * @param {Object} config 请求配置
 * @returns {string} 请求的唯一key
 */
const generateRequestKey = (config) => {
  const { method, url, params, data } = config
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
}

/**
 * 添加pending请求
 * @param {Object} config 请求配置
 */
const addPendingRequest = (config) => {
  const requestKey = generateRequestKey(config)
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    if (!pendingRequests.has(requestKey)) {
      pendingRequests.set(requestKey, cancel)
    }
  })
}

/**
 * 移除pending请求
 * @param {Object} config 请求配置
 */
const removePendingRequest = (config) => {
  const requestKey = generateRequestKey(config)
  if (pendingRequests.has(requestKey)) {
    const cancel = pendingRequests.get(requestKey)
    cancel(requestKey)
    pendingRequests.delete(requestKey)
  }
}

/**
 * 清除所有pending的请求
 */
const clearPendingRequests = () => {
  for (const [requestKey, cancel] of pendingRequests) {
    cancel(requestKey)
  }
  pendingRequests.clear()
}

/**
 * 取消重复的请求
 * @param {Object} config 当前请求配置
 */
export const cancelRequest = (config) => {
  removePendingRequest(config) // 取消已存在的请求
  addPendingRequest(config) // 添加当前请求到pending
}

/**
 * 请求完成后移除pending状态
 * @param {Object} config 请求配置
 */
export const removeRequest = (config) => {
  removePendingRequest(config)
}

/**
 * 取消所有pending的请求
 */
export const cancelAllRequests = () => {
  clearPendingRequests()
}

export default {
  cancelRequest,
  removeRequest,
  cancelAllRequests
}
