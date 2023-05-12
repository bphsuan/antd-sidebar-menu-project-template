import axios from 'axios'
import { message } from 'antd'
import { history } from '@vitjs/runtime'
import { readAccToken, persistToken, deleteAccToken } from '@app/services/localStorage.service'

export const httpApi = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}/v1/` ?? location.origin
})

httpApi.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${readAccToken()}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

httpApi.interceptors.response.use(undefined, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401: {
        const refreshTokeUrl = `${import.meta.env.VITE_APP_API_URL}/v1/auth/refresh-tokens`
        if (error.config.url !== refreshTokeUrl) {
          const originalRequest = error.config
          return axios
            .post(refreshTokeUrl, null, { withCredentials: true })
            .then(response => {
              persistToken(response.data.access_token)
              originalRequest.headers.Authorization = `Bearer ${readAccToken()}`
              return axios(originalRequest)
            })
            .catch(err => {
              message.error(`${err.response.status}: 作業逾時，請重新登入`)
              deleteAccToken()
              history.push('/')
              return Promise.reject(error)
            })
        }
        break
      }
      case 403: {
        message.error(`帳號權限不足`)
        history.push('/')
        break
      }
      default: {
        const res = error.response.data
        message.error(`${error.response.status}: ${res.message}`)
        break
      }
    }
  }
})
