import * as React from 'react';
import PropTypes from 'prop-types';

const Icon = ({element, size = 'md'}) => {
    return React.cloneElement(element, {
        className: `icon icon--${size}`
    });
};

Icon.propTypes = {
    element: PropTypes.element.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

export default Icon;
