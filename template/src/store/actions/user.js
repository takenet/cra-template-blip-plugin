import UserActions from '../../constants/user-actions';

const getLoggedUser = (payload) => ({
    type: UserActions.GET_LOGGED_USER,
    payload
});

const setLoggedUser = (payload) => ({
    type: UserActions.SET_LOGGED_USER,
    payload
});

const getUserPermission = (payload) => ({
    type: UserActions.GET_USER_PERMISSION,
    payload
});

const setUserPermission = (payload) => ({
    type: UserActions.SET_USER_PERMISSION,
    payload
});

export { getLoggedUser, setLoggedUser, getUserPermission, setUserPermission };
