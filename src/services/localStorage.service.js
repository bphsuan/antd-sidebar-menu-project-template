export const persistToken = token => {
  localStorage.setItem('accessToken', token)
}

export const persistUser = data => {
  localStorage.setItem('user', data)
}

export const readAccToken = () => {
  return localStorage.getItem('accessToken')
}

export const readRefToken = () => {
  return localStorage.getItem('refreshToken')
}

export const readUser = () => {
  const result = localStorage.getItem('user')
  return JSON.parse(result)
}

export const deleteAccToken = () => localStorage.removeItem('accessToken')
export const deleteUser = () => localStorage.removeItem('user')
