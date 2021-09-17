import UserActions from '../../constants/user-actions';

const defaultUser = {
    user: {
        data: {},
        permission: ''
    }
};

const userReducer = (state = defaultUser, action = {}) => {
    switch (action.type) {
        case UserActions.SET_LOGGED_USER:
            return { user: { ...state.user, data: action.payload } };
        case UserActions.SET_USER_PERMISSION:
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

export { defaultUser };
export default userReducer;
