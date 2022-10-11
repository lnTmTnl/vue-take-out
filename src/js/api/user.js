import { _get, _post } from "./index"

//登录
export const login = (data) => {
  let req = {
    url: "admin/user_login",
    data,
  }
  return _post(req)
}
