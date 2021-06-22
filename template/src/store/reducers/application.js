import * as action_types from '../../constants/application-actions';

const application_default = {
    application: {
        appInfo: {},
        appConfig: {}
    }
};

const applicationReducer = (state = application_default, action = {}) => {
    switch (action.type) {
        case action_types.set_application:
            return {
                application: {
                    ...state.application,
                    appInfo: action.payload
                }
            };
        case action_types.set_configuration:
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

export { application_default };
export default applicationReducer;
