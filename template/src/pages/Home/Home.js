import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import RoutesPath from '../../constants/routes-path';

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
                title={t('title.homePage')}
                icon={PAGE_ICON}
                onClick={() => window.open(settings.repositoryUrl, BLANK)}
            />
            <div className="flex flex-column items-center justify-center bp-c-neutral-dark-city f5 h-100 mt4">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="tc">
                    {t('paragraph.homeDescription.part1')}
                    <br />
                    <Trans i18nKey="paragraph.homeDescription.part2">
                        Edit <code>src/pages/Home.js</code> and save to reload.
                    </Trans>
                </p>
                <h5 className="f5 b mt3 mb2">{t('title.exemples')}</h5>
                <span
                    className="f6 flex items-center blue no-underline underline-hover pointer"
                    data-testid="exemple-one"
                    aria-hidden="true"
                    onClick={() =>
                        handleNavigation(RoutesPath.EXAMPLE_PAGE.PATH, {
                            type: 'storedData'
                        })
                    }
                >
                    <bds-icon name="file-txt-1" size="x-small" />
                    {t('link.blipDataExample')}
                </span>
                <span
                    className="f6 flex items-center blue no-underline underline-hover mt1 pointer"
                    data-testid="exemple-two"
                    aria-hidden="true"
                    onClick={() =>
                        handleNavigation(RoutesPath.EXAMPLE_PAGE.PATH, {
                            type: 'swrCall'
                        })
                    }
                >
                    <bds-icon name="file-txt-1" size="x-small" />
                    {t('link.swrExemple')}
                </span>
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
