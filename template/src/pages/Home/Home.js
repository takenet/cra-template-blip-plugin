import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ConnectTo from '../../store/connect';
import * as RoutesPath from '../../constants/routes-path';

import logo from '../../assets/images/svg/blip-balloon.svg';
import Header from './components/Header';

const PAGE_TITLE = 'Plugins Template';
const PAGE_ICON = 'plugin';
const REPOSITORY_URL =
    'https://github.com/axeldouglas/cra-template-blip-plugin';

const Home = () => {
    const history = useHistory();

    const handleNavigation = useCallback(
        (path, params = {}) => {
            history.push(path, params);
        },
        [history]
    );

    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header
                title={PAGE_TITLE}
                icon={PAGE_ICON}
                onClick={() => window.open(REPOSITORY_URL, '_blank')}
            />
            <div className="flex flex-column items-center justify-center bp-c-neutral-dark-city f5 h-100 mt4">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="tc">
                    This is a basic plugin template.
                    <br />
                    Edit <code>src/pages/Home.js</code> and save to reload.
                </p>
                <h5 className="f5 b mt3 mb2">Examples</h5>
                <a
                    className="f6 flex items-center blue no-underline underline-hover"
                    href="#0"
                    onClick={() =>
                        handleNavigation(RoutesPath.example_page.path, {
                            type: 'stored_data'
                        })
                    }
                >
                    <bds-icon name="file-txt-1" size="x-small" />
                    Get stored data as props
                </a>
                <a
                    className="f6 flex items-center blue no-underline underline-hover mt1"
                    href="#0"
                    onClick={() =>
                        handleNavigation(RoutesPath.example_page.path, {
                            type: 'swr_call'
                        })
                    }
                >
                    <bds-icon name="file-txt-1" size="x-small" />
                    SWR fetch data
                </a>
            </div>
        </div>
    );
};

Home.propTypes = {};

const mapStateToProps = (state, props) => ({
    ...props
});

export default ConnectTo(mapStateToProps)(Home);
