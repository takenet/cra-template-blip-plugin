import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    variant,
    icon,
    text,
    arrow,
    disabled,
    children,
    aria_label = 'bds-button',
    data_testid = 'bds-button',
    onClick = () => {}
}) => {
    return (
        <bds-button
            data-testid={data_testid}
            aria-label={aria_label}
            icon={icon}
            variant={variant}
            arrow={arrow}
            disabled={disabled}
            onClick={onClick}
        >
            {!!text ? text : children}
        </bds-button>
    );
};

Button.propTypes = {
    variant: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    arrow: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    aria_label: PropTypes.string,
    data_testid: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
