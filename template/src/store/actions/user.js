import * as action_types from '../../config/constants/user-actions';

const setLoggedUser = (payload) => ({
    type: action_types.set_logged_user,
    payload
});

const setUserPermission = (payload) => ({
    type: action_types.set_user_permission,
    payload
});

export { setLoggedUser, setUserPermission };
