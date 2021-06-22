import * as action_types from '../../constants/common-actions';

const common_default = {
    common: {
        language: 'pt',
        loading: false
    }
};

const commonReducer = (state = common_default, action = {}) => {
    switch (action.type) {
        case action_types.set_language:
            return {
                common: {
                    ...state.common,
                    language: action.payload.toLowerCase()
                }
            };
        case action_types.set_loading:
            return { common: { ...state.common, loading: action.payload } };
        default:
            return state;
    }
};

export { common_default };
export default commonReducer;
