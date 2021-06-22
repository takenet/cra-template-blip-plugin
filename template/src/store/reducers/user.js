import * as action_types from '../../constants/user-actions';

const user_default = {
    user: {
        data: {},
        permission: ''
    }
};

const userReducer = (state = user_default, action = {}) => {
    switch (action.type) {
        case action_types.set_logged_user:
            return { user: { ...state.user, data: action.payload } };
        case action_types.set_user_permission:
            return {
                user: {
                    ...state.user,
                    permission: action.payload
                }
            };
        default:
            return state;
    }
};

export { user_default };
export default userReducer;
