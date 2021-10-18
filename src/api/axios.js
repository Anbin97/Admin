import axios from "axios"
import { ENV, isDev } from "@/utils/env"
// 请求白名单
const axiosWhiteList = []
// 响应白名单
const whiteList = []
// 公共请求基础地址
const VUE_APP_HTTP_BASE_URL = ENV.VUE_APP_HTTP_BASE_URL
const A = axios.create({
  baseURL: VUE_APP_HTTP_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  // 测试环境 无限时间不会超时，生产环境5秒超时
  timeout: isDev ? 0 : 5000,
  // 决定拦截器进入resolve还是reject
  validateStatus: (status) => {
    return status >=200 && status < 300
  }
})

// 请求拦截
A.interceptors.request.use(config => {
  if(!axiosWhiteList.includes(config.url)) {
    // 加载图标 TODO
  }
  return config;
})

// 响应拦截
A.interceptors.response.use(
  response => {
    console.log(1)
    //关闭加载 TODO
    const { data } = response;
    if (data.code != 200 && !whiteList.includes(data.code)) {
      // 给出提示TODO
    }
    return data
  },
  error => {
    // 关闭加载 TODO
    console.log(2)
    const errorJSON = {
      errMsg: error.message
    }
    // 给出提示 TODO
    return Promise.reject(errorJSON)
  }
)

export default function ({ url = "", data = {}, method = "get", options = {} }) {
  const config = { ...options };
  config.method = method.toLocaleUpperCase();
  config.url = url;
  config.method === "GET" ? (config.params = data) : (config.data = data)
  return new Promise(resolve => {
    A(config).then(result => {
      if (result.code === 200) {
        resolve([result.data, null])
      } else {
        resolve([null, result])
      }
    }).catch(() => {
      resolve([null, null])
    })
  })
}