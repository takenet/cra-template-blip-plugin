import * as action_types from '../../config/constants/application-actions';

const setApplication = (payload) => ({
    type: action_types.set_application,
    payload
});

const setConfiguration = (payload) => ({
    type: action_types.set_configuration,
    payload
});

export { setApplication, setConfiguration };
