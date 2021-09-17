import CommonActions from '../../constants/common-actions';

const getLanguage = (payload) => ({
    type: CommonActions.GET_LANGUAGE,
    payload
});

const setLanguage = (payload) => ({
    type: CommonActions.SET_LANGUAGE,
    payload
});

const setLoading = (payload) => ({
    type: CommonActions.SET_LOADING,
    payload
});

export { getLanguage, setLanguage, setLoading };
