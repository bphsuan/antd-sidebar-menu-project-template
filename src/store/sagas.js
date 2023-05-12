import { all, fork } from 'redux-saga/effects'
import AuthSaga from '@app/pages/auth/saga'

export default function* rootSaga() {
  yield all([fork(AuthSaga)])
}
