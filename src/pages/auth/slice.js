import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false
  },
  reducers: {
    loginRequest: state => {
      state.isLoading = true
    },
    loginSuccess: state => {
      state.isLoading = false
    },
    loginFailure: state => {
      state.isLoading = false
    },
    logoutRequest: () => {},
    logoutSuccess: () => {},
    logoutFailure: () => {},
    forgetPwdRequest: state => {
      state.isLoading = true
    },
    forgetPwdSuccess: state => {
      state.isLoading = false
    },
    forgetPwdFailure: state => {
      state.isLoading = false
    }
  }
})

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  forgetPwdRequest,
  forgetPwdSuccess,
  forgetPwdFailure
} = authSlice.actions
export default authSlice.reducer
