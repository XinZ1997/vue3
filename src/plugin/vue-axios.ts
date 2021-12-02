import axios, { AxiosResponse } from 'axios'

// axios默认配置
axios.defaults.timeout = 180000 // 超时时间
axios.defaults.baseURL = axios.defaults.baseURL ? axios.defaults.baseURL : '/' // 请求前缀路径

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('tk')
    const storelLanguage = window.localStorage.getItem('language')
    const isPlugin = window.localStorage.getItem('isPlugin')
    const windowLanguage = window.navigator.language ? window.navigator.language.split('-')[0] : ''
    const moduleUrl = window.location.hash ? window.location.hash.split('/')[1].split('?')[0] : ''
    config.headers = {}
    config.headers['Accept'] = '*/*'
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers['language'] = storelLanguage || windowLanguage || 'zh'
    config.headers['REQUEST_HEADER'] = 'binary-http-client-header'
    config.headers['requestId'] = Math.random().toString()
    if (token) config.headers['Authorization'] = 'Bearer ' + token
    config.headers['tk'] = token || ''
    config.headers['token'] = token || ''
    config.headers['moduleUrl'] = `/${moduleUrl}`
    if (isPlugin) config.headers['isPlugin'] = isPlugin
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  }
)

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.status == 200) {
      const headers = response.headers
      response.config.headers = {}
      if (headers['content-type'] === 'application/octet-stream' || response.config.headers.download) {
        return response
      }
      if (response.config.headers.totalReturn) {
        return response.data
      }
      if (response.data.success) {
        return response.data.data
      } else {
        return false
      }
    }
  },
  (error) => {
    if (!error.response.config.coreAjax) {
      return Promise.reject(error)
    }
    const code = error.response.status
    switch (code) {
      case 401:
        console.error('401')
        break
      case 423:
        console.error('423')
        break
      case 404:
        console.error('[404]', error.response.config.url)
        break
      case 425:
        console.error('425')
        break
      default:
        console.error('服务异常')
    }
  }
)

const get = async (url: string, params?: any): Promise<any> => {
  try {
    const res = await axios.get(url, params)
    return res.data || res
  } catch (error) {
    return null
  }
}

const post = async (url: string, params?: any): Promise<any> => {
  try {
    const res = await axios.post(url, params)
    return res.data || res
  } catch (error) {
    return null
  }
}

export { get, post }
