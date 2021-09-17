import CommonActionTypes from '../../constants/common-actions';
import { getCurrentLanguageAsync } from '../../services/application-service';
import { setLanguage } from '../actions/common';

const getLanguageAsync = async (dispatch, { payload }) => {
    try {
        const language = await getCurrentLanguageAsync();
        if (!!language) {
            await dispatch(setLanguage(language));
        }
    } catch (error) {
        // display error message
    }
};

const all = (action) => (dispatch) => {
    switch (action?.type) {
        case CommonActionTypes.GET_LANGUAGE:
            getLanguageAsync(dispatch, action);
            break;
        default:
            break;
    }

    dispatch(action);
};

export default all;
