import request from '../utils/request'

export const getGoodsList = () => {
  return request.get('/goods/list')
}

export const getGoosli = () => {
  return request.get('/goods/ls')
}