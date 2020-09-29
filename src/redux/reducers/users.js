import * as actions from '../actions/actionTypes';

const initialState = {
    users: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
  }

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.USERS_FETCH + actions.PENDING:
          return {
            ...state,
            isPending: true,
          }
        case actions.USERS_FETCH + actions.REJECTED:
          return {
            ...state,
            isRejected: true,
            isPending: false,
            error: payload,
          }
        case actions.USERS_FETCH + actions.FULFILLED:
          return {
            ...state,
            isFulfilled: true,
            isPending: false,
            users: payload.data.data,
          }
        case actions.USERS_FETCH_SEARCH + actions.PENDING:
          return {
            ...state,
            isPending: true,
          }
        case actions.USERS_FETCH_SEARCH + actions.REJECTED:
          return {
            ...state,
            isRejected: true,
            isPending: false,
            error: payload,
          }
        case actions.USERS_FETCH_SEARCH + actions.FULFILLED:
          return {
            ...state,
            isFulfilled: true,
            isPending: false,
            users: payload.data.data,
          }
        default:
          return state
      }
}

export default userReducer;
