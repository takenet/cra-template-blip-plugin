import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import i18n from '../translate';

import ConnectTo from '../store/connect';

import { load, identify } from '../services/analytics';
import { getCurrentLanguage } from '../services/application-service';
import { withLoading, showToast } from '../services/common-service';
import * as BlipPortalToastTypes from '../constants/blip-portal-toast-types';

import * as ApplicationActions from '../store/actions/application';
import * as CommonActions from '../store/actions/common';
import * as UserActions from '../store/actions/user';

import sleep from '../utils/sleep';

const DEFAULT_LANGUAGE = 'pt';
const DELAY_TIME = 600;

const Initialize = ({ dispatch }) => {
    const { t } = useTranslation();

    useEffect(() => {
        // segment analytics
        load();
        identify();

        // get application, user and language
        getInitialInfo();
        // eslint-disable-next-line
    }, []);

    const getInitialInfo = () => {
        withLoading(async () => {
            await dispatch(ApplicationActions.getApplication());
            await dispatch(UserActions.getLoggedUser());
            await getLanguage();
            await sleep(DELAY_TIME);

            showToast({
                type: BlipPortalToastTypes.success,
                message: t('success.loaded')
            });
        });
    };

    // configure i18n
    const getLanguage = async () => {
        const language = await getCurrentLanguage();

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
