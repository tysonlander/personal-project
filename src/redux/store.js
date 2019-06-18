import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'
import cowReducer from './cowReducer'
import loadingReducer from './loadingReducer'
import healthFlags from './healthFlags'
import oneCowHealthReducer from './oneCowHealthReducer'

const rootReducer = combineReducers({
  user: userReducer,
  newCow: cowReducer,
  loading: loadingReducer,
  healthFlags: healthFlags,
  oneCowHealth: oneCowHealthReducer
})

export default createStore(rootReducer)