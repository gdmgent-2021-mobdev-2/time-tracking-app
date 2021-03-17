import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(
    ({ type = "text", name, onChange, value, error, disabled }, ref) => {
        return (
            <div className="form-group">
                <input className={`form-control ${error ? 'is-invalid' : ''}`}
                       type={type}
                       name={name}
                       ref={ref}
                       disabled={disabled}
                       value={value}
                       onChange={onChange} />
                {error && (
                    <div className="invalid-feedback">
                        {error}
                    </div>
                )}
            </div>
        )
    });

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default Input;
