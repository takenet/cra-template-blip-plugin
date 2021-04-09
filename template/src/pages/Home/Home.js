import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ConnectTo from '../../store/connect';

import logo from '../../assets/images/svg/blip-balloon.svg';
import Header from './components/Header';

const PAGE_TITLE = 'Plugins Template';
const PAGE_ICON = 'plugin';
const REPOSITORY_URL =
    'https://github.com/axeldouglas/cra-template-blip-plugin';

const Home = ({ dispatch }) => {
    const handleNavigation = useCallback((path, params = {}) => {
        window.open(REPOSITORY_URL, '_blank');
    }, []);

    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header
                title={PAGE_TITLE}
                icon={PAGE_ICON}
                onClick={() => handleNavigation()}
            />
            <div className="flex flex-column items-center justify-center bp-c-neutral-dark-city f5 h-100 mt5">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="tc">
                    This is a basic plugin template.
                    <br />
                    Edit <code>src/pages/Home.js</code> and save to reload.
                </p>
            </div>
        </div>
    );
};

Home.propTypes = {
    dispatch: PropTypes.func
};

const mapStateToProps = (state, props) => ({
    ...props
});

export default ConnectTo(mapStateToProps)(Home);
