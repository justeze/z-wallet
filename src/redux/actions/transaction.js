import * as actions from './actionTypes';
import { transactionTransfer, history } from "../../utils/reqData";
// import { ActionSheetIOS } from 'react-native';

export const addToTransferCreator = (id, username, phone_number, image) => {
    // console.log('kambing')
    return {
        type: actions.ADD_TRANSFER,
        payload: {
            id, username, phone_number, image
        }
    }
}

export const cancelTransferCreator = () => {
    return {
        type: actions.CANCEL_TRANSFER
    }
}

export const transferToConfirmationCreator = (data) => {
    return {
        type: actions.TRANSFER_TO_CONFIRM,
        payload: transactionTransfer(data)
    }
}

export const historyCreator = (id) => {
    // console.log('kambing')
    return {
        type: actions.GET_HISTORY,
        payload: history(id)
    }
}