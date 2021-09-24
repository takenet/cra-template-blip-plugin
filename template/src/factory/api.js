import axios from 'axios';
import settings from '../config';

const HEADER_TYPE = 'Content-Type';
const JSON_TYPE = 'application/json; charset=utf-8';

const ApiFactory = () => {
    const api = axios.create({ baseURL: settings.api.url });

    api.interceptors.request.use(async (config) => {
        const headerConfig = config;
        headerConfig.headers.post[HEADER_TYPE] = JSON_TYPE;
        return headerConfig;
    });

    return api;
};

export default ApiFactory();
