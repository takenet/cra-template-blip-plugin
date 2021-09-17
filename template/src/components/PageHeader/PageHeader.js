import React from 'react';
import Proptypes from 'prop-types';

const COLOR_NEUTRAL_DARK_ROOFTOP = '#505F79';
const COLOR_NEUTRAL_MEDIUM_CLOUD = '#8CA0B3';

const PageHeader = ({
    title,
    icon,
    isInformative = false,
    helpText,
    isBackNavigation = false,
    onBackPressed,
    relatedOptions
}) => {
    const renderInfoTitle = () => (
        <div className="pointer" data-testid="page-header-tooltip">
            <bds-tooltip tooltip-text={helpText} position="right-center">
                <bds-icon
                    name="info"
                    theme="solid"
                    color={COLOR_NEUTRAL_MEDIUM_CLOUD}
                />
            </bds-tooltip>
        </div>
    );

    return (
        <div className="flex flex-row items-center-ns justify-between w-100 pv3 mt2 bb bp-bc-neutral-medium-wave">
            <div className="flex items-center">
                {isBackNavigation && (
                    <div
                        className="pointer mr1"
                        onClick={onBackPressed}
                        data-testid="page-header-back-icon"
                    >
                        <bds-icon
                            name="arrow-left"
                            color={COLOR_NEUTRAL_DARK_ROOFTOP}
                        />
                    </div>
                )}

                {!!icon && (
                    <div data-testid="page-header-icon">
                        <bds-icon
                            name={icon}
                            color={COLOR_NEUTRAL_DARK_ROOFTOP}
                        />
                    </div>
                )}

                <h2 className="f3 ml2 mr1 bp-c-neutral-dark-city">{title}</h2>

                {isInformative && !!helpText && renderInfoTitle()}
            </div>
            {!!relatedOptions && (
                <div className="flex items-center justify-end">
                    {relatedOptions}
                </div>
            )}
        </div>
    );
};

PageHeader.propTypes = {
    title: Proptypes.string,
    icon: Proptypes.string,
    isInformative: Proptypes.bool,
    helpText: Proptypes.string,
    isBackNavigation: Proptypes.bool,
    onBackPressed: Proptypes.func,
    relatedOptions: Proptypes.any
};

export default PageHeader;
