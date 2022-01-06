import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { page } from '../services/analytics-service';
import RoutesPath from '../constants/routes-path';

const Analytics = ({ children }) => {
    const history = useHistory();

    useEffect(
        () =>
            history.listen((location) => {
                const { pathname, state } = location;
                const title = getPageTitle(pathname);
                page(title, { state });
            }),
        // eslint-disable-next-line
        [history]
    );

    const getPageTitle = (pathname) => {
        // eslint-disable-next-line no-unused-vars
        const [id, details] =
            // eslint-disable-next-line no-unused-vars
            Object.entries(RoutesPath).find(([i, d]) => d.PATH === pathname) ||
            [];

        return details ? details.NAME : '';
    };

    return children;
};

Analytics.propTypes = {
    children: PropTypes.element
};

export default Analytics;
