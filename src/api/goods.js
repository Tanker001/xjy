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
export const getCurrencyCouponList = () => {
  return request.get('/currencyCoupon/list')
}

export const addCoupon = () => {
  return request.post('/currencyCoupon/list/create')
}

// 获取通用优惠券列表
export const getCouponList = () => {
  return request.get('/coupon/getCouponList')
}

// 查询
export const getCouponId = id => {
  return request.get(`/currencyCoupon/${id}`)
}
