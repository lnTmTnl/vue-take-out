import { _get, _put } from "./index"

export const getStores = (data) => {
  const req = {
    url: "/v1/restaurants",
    data,
  }

  return _get(req)
}

export const getStore = (data) => {
  const req = {
    url: `v1/restaurant/${data.id}`,
  }

  return _get(req)
}

export const getMenu = (data) => {
  const req = {
    url: `v1/food/${data.id}`,
  }

  return _get(req)
}
