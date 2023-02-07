import React from 'react';
import PropTypes from 'prop-types';

function CustomTextarea({
  value, handleChange, placeholder,
}) {
  return (
    <div className="textarea_container">
      <textarea
        value={value}
        placeholder={placeholder}
        className="custom_textarea"
        onChange={({ target }) => handleChange(target.value)}
      />
    </div>
  );
}

CustomTextarea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

CustomTextarea.defaultProps = {
  value: '',
  placeholder: '',
};

export default CustomTextarea;
