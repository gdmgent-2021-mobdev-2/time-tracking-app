import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(
    ({ type = "text", name, onChange, value, }, ref) => {
    return (
        <div className="form-group">
            <input className="form-control"
                   type={type}
                   name={name}
                   ref={ref}
                   value={value}
                   onChange={onChange} />
        </div>
    )
});

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input;
