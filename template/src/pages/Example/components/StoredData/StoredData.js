import React from 'react';
import PropTypes from 'prop-types';
import ConnectTo from '../../../../store/connect';
import Card from '../../../../components/Card';
import Header from '../Header';

const StoredData = ({ appInfo, language, onClick }) => {
    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header title="Voltar" onClick={onClick} />
            <div className="w-50 m0 ml2-m ml3-l mb3 mb4-l mt4">
                <Card className="min-h-18">
                    <div className="overflow-auto">
                        <table className="f6 w-100 mw8 center">
                            <tbody className="lh-copy">
                                <tr>
                                    <td className="pv3 b bb b--black-20">
                                        Name
                                    </td>
                                    <td className="pv3 bb b--black-20">
                                        {!!appInfo &&
                                            !!appInfo.name &&
                                            appInfo.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pv3 b bb b--black-20">
                                        Short Name
                                    </td>
                                    <td className="pv3 bb b--black-20">
                                        {!!appInfo &&
                                            !!appInfo.shortName &&
                                            appInfo.shortName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pv3 b bb b--black-20">
                                        Identifier
                                    </td>
                                    <td className="pv3 bb b--black-20">
                                        {!!appInfo &&
                                            !!appInfo.applicationJson &&
                                            appInfo.applicationJson.identifier}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pv3 b bb b--black-20">
                                        Language
                                    </td>
                                    <td className="pv3 bb b--black-20">
                                        {!!language && language}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

StoredData.propTypes = {
    appInfo: PropTypes.object,
    language: PropTypes.string,
    onClick: PropTypes.func
};

const mapStateToProps = (state, props) => ({
    appInfo: state.application.appInfo,
    language: state.common.language,
    ...props
});

export default ConnectTo(mapStateToProps)(StoredData);
