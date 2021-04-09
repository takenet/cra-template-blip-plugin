import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

const Input = ({
    name,
    label,
    placeholder,
    icon,
    value,
    helper_message,
    error_message,
    min_length,
    max_length,
    danger = false,
    focused = false,
    wait_time = 500,
    textarea_cols = 0,
    textarea_rows = 0,
    is_textarea = false,
    errors = {},
    touched = {},
    onFocus = () => {},
    onBlur = () => {},
    onChange = () => {}
}) => {
    const blip_input_ref = useRef(null);
    const [error, setError] = useState('');
    let time = null;

    useEffect(() => {
        const { current } = blip_input_ref;
        current.addEventListener('bdsChange', handleChange);
        current.addEventListener('bdsFocus', (e) => onFocus(e));
        current.addEventListener('bdsOnBlur', (e) => onBlur(e));

        return () => {
            current.removeEventListener('bdsChange', handleChange);
            current.removeEventListener('bdsFocus', (e) => onFocus(e));
            current.removeEventListener('bdsOnBlur', (e) => onBlur(e));
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const { current } = blip_input_ref;
        if (!!focused && !!current) {
            current.setFocus();
        }
    }, [focused]);

    useEffect(() => {
        setError(
            getIn(touched, name) && getIn(errors, name)
                ? getIn(errors, name)
                : ''
        );
    }, [touched, errors, name]);

    const handleChange = (e) => {
        clearTimeout(time);
        time = setTimeout(() => onChange(e), wait_time);
    };

    return (
        <div className="relative">
            <bds-input
                data-testid="bds-input"
                ref={blip_input_ref}
                input-name={name}
                label={label}
                placeholder={placeholder}
                icon={icon}
                value={value}
                helper-message={helper_message}
                danger={!!error || danger}
                error-message={error || error_message}
                minlength={min_length}
                maxlength={max_length}
                cols={textarea_cols}
                rows={textarea_rows}
                is-textarea={is_textarea}
            />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string,
    helper_message: PropTypes.string,
    error_message: PropTypes.string,
    min_length: PropTypes.number,
    max_length: PropTypes.number,
    danger: PropTypes.bool,
    focused: PropTypes.bool,
    wait_time: PropTypes.number,
    textarea_cols: PropTypes.number,
    textarea_rows: PropTypes.number,
    is_textarea: PropTypes.bool,
    errors: PropTypes.object,
    touched: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
};

export default Input;
