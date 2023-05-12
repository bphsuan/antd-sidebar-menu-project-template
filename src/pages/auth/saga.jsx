import { message, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { delay, call, put, takeLatest } from 'redux-saga/effects'
import { history } from '@vitjs/runtime'
import { loginApi, forgetPasswordApi } from '@app/api/auth.api'
import {
  persistToken,
  persistUser,
  readUser,
  deleteAccToken,
  deleteUser
} from '@app/services/localStorage.service'
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  forgetPwdSuccess,
  forgetPwdFailure
} from './slice'

const { confirm } = Modal

export function* LoginRequest(action) {
  try {
    const payload = action.payload
    const result = yield call(loginApi, payload)
    persistToken(result?.data?.access_token)
    persistUser(JSON.stringify(result?.data?.user))
    yield put(loginSuccess())
    message.success('登入成功')
    history.push('/')
  } catch (e) {
    message.error(`失敗: ${e}, ${e?.response?.data?.message ?? ''}`)
    yield put(loginFailure())
  }
}

export function* ForgetPwdRequest(action) {
  try {
    const payload = action.payload
    const result = yield call(forgetPasswordApi, payload)
    yield put(forgetPwdSuccess(result))
    message.success('成功')
  } catch (error) {
    message.error(error)
    yield put(forgetPwdFailure())
  }
}

function* ConfirmPromise() {
  return new Promise(resolve => {
    confirm({
      title: '確定要登出嗎?',
      icon: <ExclamationCircleOutlined />,
      okText: '確定',
      cancelText: '取消',
      onOk() {
        deleteAccToken('accessToken')
        deleteUser('user')
        history.go(0)
        resolve()
      }
    })
  })
}

function* Logout() {
  try {
    yield delay(500)
    yield call(ConfirmPromise)
    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutFailure())
  }
}

function* authSaga() {
  yield takeLatest('auth/loginRequest', LoginRequest)
  yield takeLatest('auth/logoutRequest', Logout)
  yield takeLatest('auth/forgetPwdRequest', ForgetPwdRequest)
}

export default authSaga
