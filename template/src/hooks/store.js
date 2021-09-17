import { useContext, createContext } from 'react';
import { defaultApplication } from '../store/reducers/application';
import { defaultCommon } from '../store/reducers/common';
import { defaultUser } from '../store/reducers/user';

const defaultStore = {
    store: { ...defaultApplication, ...defaultCommon, ...defaultUser },
    dispatch: () => {}
};
const StoreContext = createContext(defaultStore);
const Context = () => useContext(StoreContext);

export { defaultStore, StoreContext };
export default Context;
