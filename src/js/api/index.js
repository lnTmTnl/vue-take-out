import axios from "axios"
import router from "@/router"

const Axios = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 0,
  withCredentials: true,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  maxContentLength: 2000,
  transformResponse: [
    function (data) {
      try {
        data = JSON.parse(data)
      } catch (e) {
        data = {}
      }
      if (data.status === 403) {
        router.push("/login")
      }
      return data
    },
  ],
})

export const _get = (req) => {
  return Axios.get(req.url, { params: req.data })
}

export const _post = (req) => {
  return Axios.post(req.url, req.data)
}

export const _put = (req) => {
  return Axios.put(req.url, req.data)
}

export const _delete = (req) => {
  return Axios.delete(req.url, req.data)
}
