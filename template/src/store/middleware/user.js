import UserActionsType from '../../constants/user-actions';
import * as UserService from '../../services/user-service';
import * as UserActions from '../actions/user';

const getLoggedUserAsync = async (dispatch, { payload }) => {
    try {
        const userData = await UserService.getLoggedUserAsync();
        if (!!userData) {
            await dispatch(UserActions.setLoggedUser(userData));
        }
    } catch (error) {
        // display error message
    }
};

const getUserPermissionAsync = async (dispatch, { payload }) => {
    try {
        const permissionData = await UserService.getUserPermissionsAsync();
        if (!!permissionData) {
            await dispatch(UserActions.setUserPermission(permissionData));
        }
    } catch (error) {
        // display error message
    }
};

const all = (action) => (dispatch) => {
    switch (action?.type) {
        case UserActionsType.GET_LOGGED_USER:
            getLoggedUserAsync(dispatch, action);
            break;
        case UserActionsType.GET_USER_PERMISSION:
            getUserPermissionAsync(dispatch, action);
            break;
        default:
            break;
    }

    dispatch(action);
};

export default all;
