import CommonActions from '../../constants/common-actions';

const defaultCommon = {
    common: {
        language: 'pt',
        loading: false
    }
};

const commonReducer = (state = defaultCommon, action = {}) => {
    switch (action.type) {
        case CommonActions.SET_LANGUAGE:
            return {
                common: {
                    ...state.common,
                    language: action.payload.toLowerCase()
                }
            };
        case CommonActions.SET_LOADING:
            return { common: { ...state.common, loading: action.payload } };
        default:
            return state;
    }
};

export { defaultCommon };
export default commonReducer;
