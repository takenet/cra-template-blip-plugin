import api from '../factory/api';

const setPluginData = async (params) => {
    const { data } = await api.post('<API ENDPOINT>', params);
    return data;
};

export { setPluginData };
