import * as actions from './actionTypes';
import { authLogin, authRegister, updateUser } from "../../utils/reqData";

export const authRegisterCreator = (email, name, password, pin) => {
  return {
    type: actions.AUTH_LOGIN,
    payload: authRegister(email, name, password, pin),
  }
}

export const authLoginCreator = (email, password) => {
  return {
    type: actions.AUTH_LOGIN,
    payload: authLogin(email, password),
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