import * as actions from "../actions/actionTypes";

const initialState = {
  transfer: {},
  transferConfirm: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const transactionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_TRANSFER:
      return {
        ...state,
        transfer: {
          ...payload
        }
      }
    case actions.CANCEL_TRANSFER:
      return {
        ...state,
        transfer: {}
      }
    case actions.TRANSFER_TO_CONFIRM + actions.PENDING:
      return {
        ...state,
        isPending: true,
      }
    case actions.TRANSFER_TO_CONFIRM + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        isPending: false,
        error: payload,
      }
    case actions.TRANSFER_TO_CONFIRM + actions.FULFILLED:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        transferConfirm: payload.data.data,
      }
    default:
      return state
  }
}

export default transactionReducer;
