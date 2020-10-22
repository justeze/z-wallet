import { ActionType } from 'redux-promise-middleware';



export const AUTH_LOGIN = 'authLogin'
export const AUTH_REGISTER = 'authRegister'
export const AUTH_EDITUSER = 'authEditUser'
export const AUTH_LOGOUT = 'authLogout'
export const AUTH_CLEAR_PIN = 'clearPin'
export const AUTH_RESET_PASSWORD = 'resetPassword'
export const AUTH_GET_BALANCE = 'getBalance'
export const AUTH_UPDATE_PASSWORD = 'updatePassword'
export const AUTH_UPDATE_PIN = 'updatePin'
export const AUTH_SEND_EMAIL = 'sendEmail'
export const AUTH_CLEAR_STATE = 'clearState'
// export const AUTH_PIN_CONF = 'authPinConf'


export const ADD_TRANSFER = 'addTransfer'
export const CANCEL_TRANSFER = 'cancelTransfer'
export const TRANSFER_TO_CONFIRM = 'transferToConfirm'
export const GET_HISTORY = 'getHistory'

export const USERS_FETCH = 'fetchUser'
export const USERS_FETCH_SEARCH = 'fetchUserSearch'
export const USERS_GET_RANDOM_USER = 'getRandomUser'

export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;