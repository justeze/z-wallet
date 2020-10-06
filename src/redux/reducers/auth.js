import * as actions from "../actions/actionTypes";

const initialState = {
  data: {},
  status: {},
  email: {},
  reset: {},
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_LOGIN + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.AUTH_LOGIN + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actions.AUTH_LOGIN + actions.FULFILLED:
      // console.log(payload.data.data)
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
        isLogin: true,
      };
    case actions.AUTH_REGISTER + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.AUTH_REGISTER + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actions.AUTH_REGISTER + actions.FULFILLED:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
        // isLogin: true,
      };
    case actions.AUTH_EDITUSER + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.AUTH_EDITUSER + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actions.AUTH_EDITUSER + actions.FULFILLED:

      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        status: payload.data.msg,
        isRejected: false,
        // isLogin: true,
      };
    case actions.AUTH_LOGOUT:
      return {
        data: {},
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      }
    case actions.AUTH_CLEAR_PIN :
      return {
        ...state,
        pin: '',
      }
    case actions.AUTH_GET_EMAIL + actions.FULFILLED:
      // console.log('babi', payload.data.data)
      return {
        ...state,
        email: payload.data.data
      }
    case actions.AUTH_RESET_PASSWORD + actions.FULFILLED:
      return {
        ...state,
        reset: payload.data.data
      }
    case actions.AUTH_CLEAR_EMAIL:
      return {
        ...state,
        reset: {},
        email: {}
      }
    default:
      return state;
  }
};

export default authReducer;