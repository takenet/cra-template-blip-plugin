import * as action_types from '../../constants/user-actions';

const getLoggedUser = (payload) => ({
    type: action_types.get_logged_user,
    payload
});

const setLoggedUser = (payload) => ({
    type: action_types.set_logged_user,
    payload
});

const getUserPermission = (payload) => ({
    type: action_types.get_user_permission,
    payload
});

const setUserPermission = (payload) => ({
    type: action_types.set_user_permission,
    payload
});

export { getLoggedUser, setLoggedUser, getUserPermission, setUserPermission };
