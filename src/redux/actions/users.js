import * as actions from './actionTypes';
import { getUsers, getUserSearch, getQuickAccess } from "../../utils/reqData";

export const requestUsersCreator = () => {
    return {
        type: actions.USERS_FETCH,
        payload: getUsers(),
    };
};
export const searchUserCreator = (username) => {
    return {
        type: actions.USERS_FETCH_SEARCH,
        payload: getUserSearch(username)
    };
};

export const getRandomUser = (id) => {
    return {
        type: actions.USERS_GET_RANDOM_USER,
        payload: getQuickAccess(id)
    }
}