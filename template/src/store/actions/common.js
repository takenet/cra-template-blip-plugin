import * as action_types from '../../constants/common-actions';

const getLanguage = (payload) => ({
    type: action_types.get_language,
    payload
});

const setLanguage = (payload) => ({
    type: action_types.set_language,
    payload
});

const setLoading = (payload) => ({
    type: action_types.set_loading,
    payload
});

export { getLanguage, setLanguage, setLoading };
