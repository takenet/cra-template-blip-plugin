import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { page } from '../services/analytics';
import * as RoutesPath from '../constants/routes-path';
import settings from '../config';

const Analytics = ({ children }) => {
    const history = useHistory();

    useEffect(() => {
        if (!!settings.segment.key) {
            return history.listen((location) => {
                const { pathname, state } = location;
                const title = getPageTitle(pathname);
                page(title, { state });
            });
        }

        // eslint-disable-next-line
    }, [history]);

    const getPageTitle = (pathname) => {
        return Object.keys(RoutesPath)
            .filter((item) => RoutesPath[item].path === pathname)
            .reduce((t, item) => {
                return RoutesPath[item].name;
            }, '');
    };

    return <Fragment>{children}</Fragment>;
};

Analytics.propTypes = {
    children: PropTypes.any
};

export default Analytics;
