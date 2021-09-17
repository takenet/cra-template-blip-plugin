import ApplicationActions from '../../constants/application-actions';

const getApplication = (payload) => ({
    type: ApplicationActions.GET_APPLICATION,
    payload
});

const setApplication = (payload) => ({
    type: ApplicationActions.SET_APPLICATION,
    payload
});

const setConfiguration = (payload) => ({
    type: ApplicationActions.SET_CONFIGURATION,
    payload
});

export { getApplication, setApplication, setConfiguration };
