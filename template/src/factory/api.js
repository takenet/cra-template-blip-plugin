import axios from 'axios';
import settings from '../config';

const HEADER_TYPE = 'Content-Type';
const JSON_TYPE = 'application/json; charset=utf-8';

const ApiFactory = () => {
    const api = axios.create({ baseURL: settings.plugin.apiUrl });

    api.interceptors.request.use(async (config) => {
        const headerConfig = config;
        headerConfig.headers.post[HEADER_TYPE] = JSON_TYPE;
        return headerConfig;
    });

    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return api;
};

export default ApiFactory();
