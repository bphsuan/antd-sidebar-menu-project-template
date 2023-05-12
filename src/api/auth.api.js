import { httpApi } from './http.api'
!import.meta.env.VITE_APP_API_URL && import('./mocks/auth.api.mock')

const baseRoute = 'auth'

export const loginApi = payload => httpApi.post(`${baseRoute}/login`, { ...payload })

export const forgetPasswordApi = payload =>
  httpApi.post(`${baseRoute}/forgetPassword`, { ...payload }).then(({ data }) => data)
