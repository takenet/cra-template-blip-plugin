import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Routes from './routes';

import i18n from './translate';

import { getCurrentLanguageAsync } from './services/application-service';
import { withLoadingAsync, showToast } from './services/common-service';
import BlipPortalToastTypes from './constants/blip-portal-toast-types';

const DEFAULT_LANGUAGE = 'pt';

const App = () => {
    const { t } = useTranslation();

    useEffect(() => {
        getInitialInfoAsync();
        // eslint-disable-next-line
	}, []);

    const getInitialInfoAsync = async () => {
        await withLoadingAsync(async () => {
            await getLanguageAsync();

            showToast({
                type: BlipPortalToastTypes.SUCCESS,
                message: t('success.loaded')
            });
        });
    };

    const getLanguageAsync = async () => {
        const language = await getCurrentLanguageAsync();

        if (!!language && language !== DEFAULT_LANGUAGE) {
            i18n.changeLanguage(language);
        }
    };

    return <Routes />;
};

export default App;
