import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'
import cowReducer from './cowReducer'
import loadingReducer from './loadingReducer'
import healthFlags from './healthFlags'

const rootReducer = combineReducers({
  user: userReducer,
  newCow: cowReducer,
  loading: loadingReducer,
  healthFlags: healthFlags
})

export default createStore(rootReducer)