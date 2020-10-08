import * as actions from './actionTypes';
import { authLogin, authRegister, getEmail, updateUser, resetPassword, getBalance } from "../../utils/reqData";

export const authRegisterCreator = (data) => {
  return {
    type: actions.AUTH_REGISTER,
    payload: authRegister(data),
  }
}

export const authLoginCreator = (data) => {
  return {
    type: actions.AUTH_LOGIN,
    payload: authLogin(data),
  }
}
export const updateUserCreator = (username, password, pin, image, email) => {
  return {
    type: actions.AUTH_EDITUSER,
    payload: updateUser(username, password, pin, image, email),
  };
};

export const LoggedOut = () => {
  return {
    type: actions.AUTH_LOGOUT,
  };
};
export const clearPin = () => {
  return {
    type: actions.AUTH_CLEAR_PIN,
  };
};
export const getEmailCreator = (data) => {
  // console.log(data)
  return {
    type: actions.AUTH_GET_EMAIL,
    payload: getEmail(data)
  }
}
export const clearEmailState = () => {
  return {
    type: actions.AUTH_CLEAR_EMAIL
  }
}
export const resetPasswordCreator = (data) => {
  return {
    type: actions.AUTH_RESET_PASSWORD,
    payload: resetPassword(data)
  }
}

export const getBalanceCreator = (id) => {
  return {
    type: actions.AUTH_GET_BALANCE,
    payload: getBalance(id)
  }
}