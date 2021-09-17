import ApplicationActions from '../../constants/application-actions';

const defaultApplication = {
    application: {
        appInfo: {},
        appConfig: {}
    }
};

const applicationReducer = (state = defaultApplication, action = {}) => {
    switch (action.type) {
        case ApplicationActions.SET_APPLICATION:
            return {
                application: {
                    ...state.application,
                    appInfo: action.payload
                }
            };
        case ApplicationActions.SET_CONFIGURATION:
            return {
                application: {
                    ...state.application,
                    appConfig: action.payload
                }
            };
        default:
            return state;
    }
};

export { defaultApplication };
export default applicationReducer;
