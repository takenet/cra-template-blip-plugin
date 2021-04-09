import * as action_types from '../../config/constants/common-actions';

const setLanguage = (payload) => ({
    type: action_types.set_language,
    payload
});

const setLoading = (payload) => ({
    type: action_types.set_loading,
    payload
});

export { setLanguage, setLoading };
