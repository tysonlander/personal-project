import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'
import cowReducer from './cowReducer'

const rootReducer = combineReducers({
  user: userReducer,
  newCow: cowReducer
})

export default createStore(rootReducer)