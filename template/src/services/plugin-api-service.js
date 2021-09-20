import api from '../factory/api';

const setPluginDataAsync = async (params) => {
    const { data } = await api.post('<API ENDPOINT>', params);
    return data;
};

export { setPluginDataAsync };
