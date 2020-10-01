import { combineReducers } from "redux";
import authReducer from './auth'
import userReducer from './users'
import transactionReducer from './transaction'

const indexReducer=combineReducers({
  auth: authReducer, 
  user: userReducer,
  transaction: transactionReducer
})

export default indexReducer