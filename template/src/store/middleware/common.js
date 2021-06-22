import * as action_types from '../../constants/common-actions';
import * as ApplicationService from '../../services/application-service';
import * as CommonActions from '../actions/common';

const getLanguage = async (dispatch, { payload }) => {
    try {
        const language = await ApplicationService.getCurrentLanguage();
        if (!!language) {
            await dispatch(CommonActions.setLanguage(language));
        }
    } catch (error) {
        // display error message
    }
};

const all = (action) => (dispatch) => {
    switch (action?.type) {
        case action_types.get_language:
            getLanguage(dispatch, action);
            break;
        default:
            break;
    }

    dispatch(action);
};

export default all;
