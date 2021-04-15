import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConnectTo from '../../store/connect';

import * as ApplicationService from '../../services/application-service';
import { withLoading } from '../../services/common-service';

import * as ApplicationActions from '../../store/actions/application';
import * as CommonActions from '../../store/actions/common';

import StoredData from './components/StoredData';
import SwrFetchData from './components/SwrFetchData';

import sleep from '../../utils/sleep';

const DELAY_TIME = 600;

const Example = ({ dispatch }) => {
    const history = useHistory();
    const { state } = useLocation();
    const [example, setExample] = useState(null);

    useEffect(() => {
        if (!!state) {
            const { type } = state;
            if (!!type) {
                setExample(type);
            }
        }
    }, [state]);

    useEffect(() => {
        getInitialInfo();
        // eslint-disable-next-line
    }, []);

    const getInitialInfo = () => {
        withLoading(async () => {
            const app_data = await ApplicationService.getApplicationData();
            if (!!app_data) {
                await dispatch(ApplicationActions.setApplication(app_data));
            }

            const language = await ApplicationService.getCurrentLanguage();
            if (!!language) {
                await dispatch(CommonActions.setLanguage(language));
            }

            await sleep(DELAY_TIME);
        });
    };

    const handleNavigation = useCallback(() => {
        history.push('/');
    }, [history]);

    return example === 'stored_data' ? (
        <StoredData onClick={() => handleNavigation()} />
    ) : (
        <SwrFetchData onClick={() => handleNavigation()} />
    );
};

Example.propTypes = {
    dispatch: PropTypes.func
};

const mapStateToProps = (state, props) => ({
    ...props
});

export default ConnectTo(mapStateToProps)(Example);
