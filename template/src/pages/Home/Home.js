import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import * as RoutesPath from '../../constants/routes-path';

import settings from '../../config';

import logo from '../../assets/images/svg/blip-balloon.svg';
import Header from './components/Header';

const PAGE_ICON = 'plugin';
const BLANK = '_blank';

const Home = () => {
    const history = useHistory();
    const { t } = useTranslation();

    const handleNavigation = useCallback(
        (path, params = {}) => {
            history.push(path, params);
        },
        [history]
    );

    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header
                title={t('title.home_page')}
                icon={PAGE_ICON}
                onClick={() => window.open(settings.repository_url, BLANK)}
            />
            <div className="flex flex-column items-center justify-center bp-c-neutral-dark-city f5 h-100 mt4">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="tc">
                    {t('paragraph.home_description.part1')}
                    <br />
                    <Trans i18nKey="paragraph.home_description.part2">
                        Edit <code>src/pages/Home.js</code> and save to reload.
                    </Trans>
                </p>
                <h5 className="f5 b mt3 mb2">{t('title.exemples')}</h5>
                <a
                    className="f6 flex items-center blue no-underline underline-hover"
                    href="#0"
                    data-testid="exemple-one"
                    onClick={() =>
                        handleNavigation(RoutesPath.example_page.path, {
                            type: 'stored_data'
                        })
                    }
                >
                    <bds-icon name="file-txt-1" size="x-small" />
                    {t('link.stored_exemple')}
                </a>
                <a
                    className="f6 flex items-center blue no-underline underline-hover mt1"
                    href="#0"
                    data-testid="exemple-two"
                    onClick={() =>
                        handleNavigation(RoutesPath.example_page.path, {
                            type: 'swr_call'
                        })
                    }
                >
                    <bds-icon name="file-txt-1" size="x-small" />
                    {t('link.swr_exemple')}
                </a>
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
