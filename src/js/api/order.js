import { _get, _post, _put } from "./index"

//获取订单信息
export const orderInfo = (data) => {
  let req = {
    url: `v1/order/${data.order_id}`,
  }
  return _get(req)
}

//获取我的订单
export const orders = (data) => {
  let req = {
    data,
    url: "v1/orders",
  }
  return _get(req)
}

//提交订单
export const submitOrder = (data) => {
  let req = {
    data,
    url: "v1/order",
  }
  return _post(req)
}
