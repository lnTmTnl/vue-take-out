import { _get, _post, _delete } from "./index"

//获取用户所有地址
export const getAllAddress = (data) => {
  let req = {
    data,
    url: "admin/all_address",
  }
  return _get(req)
}

//获取指定收货地址
export const getAddress = (data) => {
  let req = {
    data,
    url: "admin/address",
  }
  return _get(req)
}

//添加收获地址
export const addAddress = (data) => {
  let req = {
    data,
    url: "admin/address",
  }
  return _post(req)
}

export const updateAddress = (data) => {
  let req = {
    data,
    url: "admin/update_address",
  }
  return _post(req)
}

//删除收货地址
export const deleteAddress = (data) => {
  let req = {
    data,
    url: "admin/address",
  }
  return _delete(req)
}
