import useSWR from 'swr';
import api from '../factory/api';

const ERROR_RETRY = true;
const RETRY_COUNT = 3;
const RETRY_INTERVAL = 10000;

const useFetch = (url) => {
    const options = {
        shouldRetryOnError: ERROR_RETRY,
        errorRetryCount: RETRY_COUNT,
        errorRetryInterval: RETRY_INTERVAL
    };

    const { data, error, mutate } = useSWR(
        url,
        async (apiUrl) => {
            const response = await api.get(apiUrl);

            return response.data;
        },
        options
    );

    return { data, error, mutate };
};

export default useFetch;
