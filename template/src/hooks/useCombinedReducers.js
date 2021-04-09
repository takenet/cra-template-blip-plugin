import { useReducer } from 'react';
import applicationReducer, {
    application_default
} from '../store/reducers/application';
import commonReducer, { common_default } from '../store/reducers/common';
import userReducer, { user_default } from '../store/reducers/user';

const useCombinedReducers = () => {
    const [applicationStore, application] = useReducer(
        applicationReducer,
        application_default
    );
    const [commonStore, common] = useReducer(commonReducer, common_default);
    const [userStore, user] = useReducer(userReducer, user_default);

    return {
        store: { ...applicationStore, ...commonStore, ...userStore },
        reducers: [application, common, user]
    };
};

export default useCombinedReducers;
