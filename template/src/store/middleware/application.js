import * as action_types from '../../constants/application-actions';
import * as ApplicationService from '../../services/application-service';
import * as ApplicationActions from '../actions/application';

const getApplication = async (dispatch, { payload }) => {
    try {
        const app_data = await ApplicationService.getApplicationData();
        if (!!app_data) {
            await dispatch(ApplicationActions.setApplication(app_data));
        }
    } catch (error) {
        // display error message
    }
};

const all = (action) => (dispatch) => {
    switch (action?.type) {
        case action_types.get_application:
            getApplication(dispatch, action);
            break;
        default:
            break;
    }

    dispatch(action);
};

export default all;
