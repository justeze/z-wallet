import * as actions from './actionTypes';
import { authLogin, authRegister, updateUser } from "../../utils/reqData";

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