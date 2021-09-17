import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import StoredData from './components/StoredData';
import SwrFetchData from './components/SwrFetchData';

const Example = () => {
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

    const handleNavigation = useCallback(() => {
        history.push('/');
    }, [history]);

    return example === 'storedData' ? (
        <StoredData onClick={() => handleNavigation()} />
    ) : (
        <SwrFetchData onClick={() => handleNavigation()} />
    );
};

Example.propTypes = {
    dispatch: PropTypes.func
};

export default Example;
