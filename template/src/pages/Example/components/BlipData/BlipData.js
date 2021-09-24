import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { useTranslation } from 'react-i18next';

import settings from '../../../../config';
import { getApplicationDataAsync } from '../../../../services/application-service';
import { getLoggedUserAsync } from '../../../../services/user-service';

import Card from '../../../../components/Card';
import Header from '../Header';

const BlipData = ({ onClick }) => {
    const [appInfo, setAppInfo] = useState({});
    const [user, setUser] = useState({});
    const [language, setLanguage] = useState('');
    const { t, i18n } = useTranslation();

    useEffect(() => {
        getAppDataAsync();
        // eslint-disable-next-line
    }, []);

    const getAppDataAsync = async () => {
        const app = await getApplicationDataAsync();
        setAppInfo(app);

        const loggedUser = await getLoggedUserAsync();
        setUser(loggedUser);

        setLanguage(i18n.language);
    };

    const formatDate = (datetime) =>
        datetime && format(parseISO(datetime), settings.defaultDatetimeFormat);

    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header title={t('menu.goBack')} onClick={onClick} />
            <div className="flex">
                <div className="w-50 m0 mb3 mb4-l mt4">
                    <Card className="min-h-18">
                        <div className="overflow-auto">
                            <h4 className="f4 mt0 mb3">
                                {t('title.systemInfo')}
                            </h4>
                            <table className="f6 w-100 mw8 center">
                                <tbody className="lh-copy">
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('name')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {appInfo?.name || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('shortName')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {appInfo?.shortName || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('identifier')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {appInfo?.applicationJson
                                                ?.identifier || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('accessKey')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {appInfo?.applicationJson
                                                ?.accessKey || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('template')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {appInfo?.template || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('creationDate')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {!!appInfo?.created
                                                ? formatDate(appInfo.created)
                                                : '-'}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
                <div className="w-50 m0 ml2-m ml3-l mb3 mb4-l mt4">
                    <Card className="min-h-18">
                        <div className="overflow-auto">
                            <h4 className="f4 mt0 mb3">
                                {t('title.userInfo')}
                            </h4>
                            <table className="f6 w-100 mw8 center">
                                <tbody className="lh-copy">
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('name')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {user?.fullName || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('email')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {user?.email || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('phone')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {user?.phoneNumber || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('identity')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {user?.identity || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('language')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {language || '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pv3 b bb b--black-20">
                                            {t('creationDate')}
                                        </td>
                                        <td className="pv3 bb b--black-20">
                                            {!!user?.creationDate
                                                ? formatDate(user.creationDate)
                                                : '-'}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

BlipData.propTypes = {
    onClick: PropTypes.func
};

export default BlipData;
