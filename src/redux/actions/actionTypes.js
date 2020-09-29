import { ActionType } from 'redux-promise-middleware';



export const AUTH_LOGIN = 'authLogin'
export const AUTH_REGISTER = 'authRegister'
export const AUTH_EDITUSER = 'authEditUser'
export const AUTH_LOGOUT = 'authLogout';

export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;