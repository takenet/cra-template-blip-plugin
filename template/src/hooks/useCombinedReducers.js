import { useReducer } from 'react';
import applicationReducer, {
    defaultApplication
} from '../store/reducers/application';
import commonReducer, { defaultCommon } from '../store/reducers/common';
import userReducer, { defaultUser } from '../store/reducers/user';

const useCombinedReducers = () => {
    const [applicationStore, application] = useReducer(
        applicationReducer,
        defaultApplication
    );
    const [commonStore, common] = useReducer(commonReducer, defaultCommon);
    const [userStore, user] = useReducer(userReducer, defaultUser);

    return {
        store: { ...applicationStore, ...commonStore, ...userStore },
        reducers: [application, common, user]
    };
};

export default useCombinedReducers;
