import * as action_types from '../../constants/application-actions';

const getApplication = (payload) => ({
    type: action_types.get_application,
    payload
});

const setApplication = (payload) => ({
    type: action_types.set_application,
    payload
});

const setConfiguration = (payload) => ({
    type: action_types.set_configuration,
    payload
});

export { getApplication, setApplication, setConfiguration };
