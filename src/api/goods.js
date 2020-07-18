import request from '../utils/request'

export const getGoodsList = () => {
  return request.get('/goods/list')
}

export const getGoosli = () => {
  return request.get('/goods/ls')
}

export const getshopdetails = (userid) => {
  return request.get(`/goods/shop/${userid}`)
}