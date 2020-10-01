import { ActionType } from 'redux-promise-middleware';



export const AUTH_LOGIN = 'authLogin'
export const AUTH_REGISTER = 'authRegister'
export const AUTH_EDITUSER = 'authEditUser'
export const AUTH_LOGOUT = 'authLogout'

export const ADD_TRANSFER = 'addTransfer'
export const CANCEL_TRANSFER = 'cancelTransfer'
export const TRANSFER_TO_CONFIRM = 'transferToConfirm'

export const USERS_FETCH = 'fetchUser'
export const USERS_FETCH_SEARCH = 'fetchUserSearch'

export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;