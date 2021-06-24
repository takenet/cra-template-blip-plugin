import * as action_types from '../../constants/user-actions';
import * as UserService from '../../services/user-service';
import * as UserActions from '../actions/user';

const getLoggedUser = async (dispatch, { payload }) => {
    try {
        const user_data = await UserService.getLoggedUser();
        if (!!user_data) {
            await dispatch(UserActions.setLoggedUser(user_data));
        }
    } catch (error) {
        // display error message
    }
};

const getUserPermission = async (dispatch, { payload }) => {
    try {
        const permission_data = await UserService.getUserPermissions();
        if (!!permission_data) {
            await dispatch(UserActions.setUserPermission(permission_data));
        }
    } catch (error) {
        // display error message
    }
};

const all = (action) => (dispatch) => {
    switch (action?.type) {
        case action_types.get_logged_user:
            getLoggedUser(dispatch, action);
            break;
        case action_types.get_user_permission:
            getUserPermission(dispatch, action);
            break;
        default:
            break;
    }

    dispatch(action);
};

export default all;
