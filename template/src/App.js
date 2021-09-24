import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Routes from './routes';

import i18n from './translate';

import { getCurrentLanguageAsync } from './services/application-service';
import { withLoadingAsync, showToast } from './services/common-service';
import BlipPortalToastTypes from './constants/blip-portal-toast-types';

import sleep from './utils/sleep';

const DEFAULT_LANGUAGE = 'pt';
const DELAY_TIME = 600;

const App = () => {
    const { t } = useTranslation();

    useEffect(() => {
        setInitialInfoAsync();
        // eslint-disable-next-line
    }, []);

    const setInitialInfoAsync = async () => {
        await withLoadingAsync(async () => {
            await seti18nLanguageAsync();
            await sleep(DELAY_TIME);

            showToast({
                type: BlipPortalToastTypes.SUCCESS,
                message: t('success.loaded')
            });
        });
    };

    const seti18nLanguageAsync = async () => {
        const language = await getCurrentLanguageAsync();

        if (!!language && language !== DEFAULT_LANGUAGE) {
            i18n.changeLanguage(language);
        }
    };

    return <Routes />;
};

export default App;
