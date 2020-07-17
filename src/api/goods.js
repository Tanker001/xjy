import request from '../utils/request'

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
