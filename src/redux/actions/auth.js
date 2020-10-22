import * as actions from './actionTypes';
import { authLogin, authRegister, getEmail, updateUser, resetPassword, getBalance, changePassword, changePin, sendEmail } from "../../utils/reqData";

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

export const updatePwdCreator = (id, data) => {
  return {
    type: actions.AUTH_UPDATE_PASSWORD,
    payload: changePassword(id, data)
  }
}

export const updatePinCreator = (id, data) => {
  return {
    type: actions.AUTH_UPDATE_PIN,
    payload: changePin(id, data)
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

export const sendEmailCreator = (data) => {
  // console.log(data)
  return {
    type: actions.AUTH_SEND_EMAIL,
    payload: sendEmail(data)
  }
}

export const clearState = () => {
  return {
    type: actions.AUTH_CLEAR_STATE
  }
}

// export const pinConfCreator = (data) => {
//   return {
//     type: actions.AUTH_PIN_CONF,
//     payload: authPinConf(data)
//   }
// }