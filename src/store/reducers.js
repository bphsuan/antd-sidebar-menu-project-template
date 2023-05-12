import { combineReducers } from 'redux'
import auth from '@app/pages/auth/slice'

const rootReducer = combineReducers({
  auth
})

export default rootReducer
