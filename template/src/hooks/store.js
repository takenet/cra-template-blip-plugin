import { useContext, createContext } from 'react';
import { application_default } from '../store/reducers/application';
import { common_default } from '../store/reducers/common';
import { user_default } from '../store/reducers/user';

const defaultStore = {
    store: { ...application_default, ...common_default, ...user_default },
    dispatch: () => {}
};
const StoreContext = createContext(defaultStore);
const Context = () => useContext(StoreContext);

export { defaultStore, StoreContext };
export default Context;
