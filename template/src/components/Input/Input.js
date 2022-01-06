import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

const Input = ({
    name,
    label,
    placeholder,
    icon,
    value,
    helperMessage,
    errorMessage,
    minLength = 0,
    maxLength = 0,
    danger = false,
    focused = false,
    waitTime = 500,
    textareaCols = 0,
    textareaRows = 0,
    isTextarea = false,
    errors = {},
    touched = {},
    onFocus,
    onBlur,
    onChange
}) => {
    const blipInputRef = useRef(null);
    const [error, setError] = useState('');
    let time = null;

    useEffect(() => {
        const { current } = blipInputRef;
        current.addEventListener('bdsChange', handleChange);
        current.addEventListener('bdsFocus', onFocus);
        current.addEventListener('bdsOnBlur', onBlur);

        return () => {
            current.removeEventListener('bdsChange', handleChange);
            current.removeEventListener('bdsFocus', onFocus);
            current.removeEventListener('bdsOnBlur', onBlur);
        };
        // eslint-disable-next-line
	}, []);

    useEffect(() => {
        const { current } = blipInputRef;
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
        time = setTimeout(() => onChange(e), waitTime);
    };

    return (
        <div className="relative">
            <bds-input
                data-testid="bds-input"
                ref={blipInputRef}
                input-name={name}
                label={label}
                placeholder={placeholder}
                icon={icon}
                value={value}
                helper-message={helperMessage}
                danger={!!error || danger}
                error-message={error || errorMessage}
                minlength={minLength}
                maxlength={maxLength}
                cols={textareaCols}
                rows={textareaRows}
                is-textarea={isTextarea}
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
    helperMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    danger: PropTypes.bool,
    focused: PropTypes.bool,
    waitTime: PropTypes.number,
    textareaCols: PropTypes.number,
    textareaRows: PropTypes.number,
    isTextarea: PropTypes.bool,
    errors: PropTypes.object,
    touched: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
};

export default Input;
