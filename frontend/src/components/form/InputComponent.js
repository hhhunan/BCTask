import React from 'react';
import PropTypes from 'prop-types';

function InputComponent({
  label, value, onChange, error, required, onKeyPress, onPaste,
}) {
  return (
    <div className="input__wrapper">
      <label className="input__label">{label}</label>
      <input
        required={required}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        onKeyPress={onKeyPress}
        onPaste={onPaste}
      />
      { error ? <p className="input__error__text">{error}</p> : null }
    </div>
  );
}

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
  onPaste: PropTypes.func,
  error: PropTypes.string,
  required: PropTypes.bool,
};

InputComponent.defaultProps = {
  error: '',
  required: false,
  onPaste: () => {},
  onKeyPress: () => {},
};

export default InputComponent;
