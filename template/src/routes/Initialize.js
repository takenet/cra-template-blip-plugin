import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import i18n from '../translate';

import ConnectTo from '../store/connect';

import { getCurrentLanguageAsync } from '../services/application-service';
import { withLoadingAsync, showToast } from '../services/common-service';
import BlipPortalToastTypes from '../constants/blip-portal-toast-types';

import * as ApplicationActions from '../store/actions/application';
import * as CommonActions from '../store/actions/common';
import * as UserActions from '../store/actions/user';

import sleep from '../utils/sleep';

const DEFAULT_LANGUAGE = 'pt';
const DELAY_TIME = 600;

const Initialize = ({ dispatch }) => {
    const { t } = useTranslation();

    useEffect(() => {
        // get application, user and language
        getInitialInfo();
        // eslint-disable-next-line
    }, []);

    const getInitialInfo = () => {
        withLoadingAsync(async () => {
            await dispatch(ApplicationActions.getApplication());
            await dispatch(UserActions.getLoggedUser());
            await getLanguageAsync();
            await sleep(DELAY_TIME);

            showToast({
                type: BlipPortalToastTypes.SUCCESS,
                message: t('success.loaded')
            });
        });
    };

    // configure i18n
    const getLanguageAsync = async () => {
        const language = await getCurrentLanguageAsync();

        if (!!language && language !== DEFAULT_LANGUAGE) {
            i18n.changeLanguage(language);
            await dispatch(CommonActions.setLanguage(language));
        }
    };

    return '';
};

Initialize.propTypes = {
    dispatch: PropTypes.func
};

export default ConnectTo()(Initialize);
