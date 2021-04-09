import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../../../components/PageHeader';
import Button from '../../../../components/Button';

const Header = ({ title, icon, onClick = () => {} }) => {
    const renderOptions = () => (
        <>
            <div className="ml3">
                <Button
                    text="Visit the Repository"
                    icon="link"
                    variant="ghost"
                    onClick={() => onClick()}
                    data_testid="my-plugin-button"
                />
            </div>
        </>
    );

    return (
        <PageHeader
            title={title}
            icon={icon}
            relatedOptions={renderOptions()}
        />
    );
};

Header.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    onSearch: PropTypes.func,
    onClick: PropTypes.func
};

export default Header;
