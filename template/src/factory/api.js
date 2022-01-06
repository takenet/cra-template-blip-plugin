import axios from 'axios';
import settings from '../config';

const HEADER_CONTENT = 'Content-Type';
const TYPE_JSON = 'application/json; charset=utf-8';

const API = () => {
    const api = axios.create({ baseURL: settings.api.url });

    api.interceptors.request.use(async (config) => {
        const headerConfig = config;
        headerConfig.headers[HEADER_CONTENT] = TYPE_JSON;

        return headerConfig;
    });

    return api;
};

export default API();
