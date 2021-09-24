import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import BlipData from './components/BlipData';
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

    const handleNavigation = () => {
        history.push('/');
    };

    return example === 'blipData' ? (
        <BlipData onClick={() => handleNavigation()} />
    ) : (
        <SwrFetchData onClick={() => handleNavigation()} />
    );
};

Example.propTypes = {};

export default Example;
