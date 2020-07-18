/**
 * 请求模块
 */
import axios from 'axios'

const request = axios.create({
  // 接口的基准路径
  baseURL: 'http://localhost:8080/'
  // baseURL: 'http://192.168.29.243:3030/'
})

export default request
