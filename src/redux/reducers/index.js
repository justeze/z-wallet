import { combineReducers } from "redux";
import authReducer from './auth'
import userReducer from './users'

const indexReducer=combineReducers({
  auth: authReducer, 
  user: userReducer
})

export default indexReducer