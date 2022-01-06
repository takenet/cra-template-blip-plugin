import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../../../components/PageHeader';
import Button from '../../../../components/Button';

const Header = ({ title, icon, onClick }) => {
    const { t } = useTranslation();

    const renderOptions = () => (
        <div className="ml3">
            <Button
                text={t('button.repository')}
                icon="link"
                variant="ghost"
                onClick={() => onClick()}
                dataTestId="repository-link"
            />
        </div>
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
    onClick: PropTypes.func
};

export default Header;
