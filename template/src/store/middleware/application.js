import ApplicationActionsType from '../../constants/application-actions';
import { getApplicationDataAsync } from '../../services/application-service';
import { setApplication } from '../actions/application';

const getApplicationAsync = async (dispatch, { payload }) => {
    try {
        const appData = await getApplicationDataAsync();
        if (!!appData) {
            await dispatch(setApplication(appData));
        }
    } catch (error) {
        // display error message
    }
};

const all = (action) => (dispatch) => {
    switch (action?.type) {
        case ApplicationActionsType.GET_APPLICATION:
            getApplicationAsync(dispatch, action);
            break;
        default:
            break;
    }

    dispatch(action);
};

export default all;
