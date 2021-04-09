import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as EmptyImg } from '../../assets/images/svg/empty.svg';

const EmptyResult = ({ title, description, children }) => {
    const renderTitle = () => (
        <h5 className="f4 bp-c-medium-elephant mt4 tc">{title}</h5>
    );
    const renderDescription = () => (
        <p className="f5 bp-c-medium-cloud mt2 mw6 tc">
            {description || children}
        </p>
    );

    return (
        <div className="flex flex-column items-center justify-center">
            <EmptyImg />
            {!!title && renderTitle()}
            {(!!description || !!children) && renderDescription()}
        </div>
    );
};

EmptyResult.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any
};

export default EmptyResult;
