import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'
import cowReducer from './cowReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
  user: userReducer,
  newCow: cowReducer,
  loading: loadingReducer
})

export default createStore(rootReducer)