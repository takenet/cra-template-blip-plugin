import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../../../components/PageHeader';

const Header = ({ title, canRefresh = false, onRefresh, onClick }) => {
    const renderOptions = () => (
        <button
            data-testid="refresh-button"
            type="button"
            className="f4 fw6 db black link dim b--none bg-transparent pointer"
            onClick={onRefresh}
        >
            <bds-icon name="refresh" />
        </button>
    );

    return (
        <PageHeader
            title={title}
            isBackNavigation
            relatedOptions={canRefresh && renderOptions()}
            onBackPressed={onClick}
        />
    );
};

Header.propTypes = {
    title: PropTypes.string,
    canRefresh: PropTypes.bool,
    onRefresh: PropTypes.func,
    onClick: PropTypes.func
};

export default Header;
