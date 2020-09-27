import * as actions from "../actions/actionTypes";

const initialState = {
  data: {},
  status: [],
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
      //   console.log(payload.data.data)
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
        isLogin: true,
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
      // console.log(payload.data.data)
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        status: payload.data.status,
        isRejected: false,
        isLogin: true,
      };
    case actions.AUTH_LOGOUT:
      return {
        data: {
          avatar: '',
          username: null,
          email: null
        },
        // isAdmin: false,
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      }

    default:
      return state;
  }
};

export default authReducer;