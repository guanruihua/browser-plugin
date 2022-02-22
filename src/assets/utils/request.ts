import QS from 'qs'
import axios from 'axios'

axios.defaults.timeout = 30000 //设置超时时间为30s
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // # 设置post请求方式请求头

// 添加请求拦截器
axios.interceptors.request.use(
  function (config: any) {
    // 在发送请求之前做些什么

    const sid: string | null = sessionStorage.getItem('__SID')
    const locale: string | null = sessionStorage.getItem('lang')

    if (sid) {
      config.headers['__SID'] = sid
    }

    config.headers['locale'] = locale ? locale.replace('-', '_') : 'en_US'

    try {
      const headers_tmp: string = localStorage.getItem('HEADER_FORM_LIST') || '[]'
      const headerList: any[] = JSON.parse(headers_tmp) || []

      headerList &&
        headerList.length > 0 &&
        headerList.forEach((item: any): void => {
          const { key, value } = item
          if (key) {
            // console.log({ item })
            config.headers[key] = value
          }
        })
    } catch (error) {
      console.log({ error })
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response: any) {
    // 对响应数据做点什么
    if (response.status === 200) {
      return Promise.resolve(response)
    }
    return Promise.reject(response)
  },
  function (error: any) {
    if (error.response.data) {
      return Promise.reject(error.response)
    }
  }
)

function get(url: any, params: any) {
  return new Promise((resolve: any) => {
    axios
      .get(url, {
        params
      })
      .then((res: any) => {
        resolve(res.data)
      })
      .catch(() => {
        resolve({ code: '-2', message: '请求错误', data: 'err.readyState' })
      })
  })
}

function deletetd(url: any, params: any) {
  return new Promise(resolve => {
    axios
      .delete(url, {
        params: params
      })
      .then((res: any) => {
        resolve(res.data)
      })
      .catch(() => {
        resolve({ code: '-2', message: '请求错误', data: 'err.readyState' })
      })
  })
}

function post(url: any, params: any = {}, contentType?: any) {
  return new Promise((resolve: any) => {
    let sendParams = QS.stringify(params)
    if (contentType === 'application/json;charset=UTF-8') {
      sendParams = params
    }
    axios
      .post(url, sendParams, {
        headers: {
          'Content-Type': contentType
            ? contentType
            : 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(() => {
        resolve({ code: '-2', message: '请求错误', data: 'err.readyState' })
      })
  })
}

function request(url: any, options: any = {}) {
  const { method, single = false } = options || {}

  let params: { [k: string]: any } = options?.data || {}
  if (!single) params = Object.assign(params, { pageSize: localStorage.pageSize || 10 })
  options.data = params

  if (method) {
    switch (method.toUpperCase()) {
      case 'POST':
        return post(url, options.data, options?.contentType)
      case 'GET':
        return get(url, options.data)
      case 'DELETE':
        return deletetd(url, options.data)
      default:
        return get(url, options.data)
    }
  }

  return get(url, options.data)
}

export default request
