import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../../../components/PageHeader';

const Header = ({
    title,
    canRefresh = false,
    onRefresh = () => {},
    onClick = () => {}
}) => {
    const renderOptions = () => (
        <button
            type="link"
            className="f4 fw6 db black link dim b--none bg-transparent pointer"
            onClick={onRefresh}
        >
            <bds-icon name="refresh" />
        </button>
    );

    return (
        <PageHeader
            title={title}
            isBackNavigation={true}
            relatedOptions={canRefresh && renderOptions()}
            onBackPressed={onClick}
        />
    );
};

Header.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    canRefresh: PropTypes.bool,
    onRefresh: PropTypes.func,
    onClick: PropTypes.func
};

export default Header;
