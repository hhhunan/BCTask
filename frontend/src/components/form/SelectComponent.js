import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

function SelectComponent({
  label, handleChange, data, defaultValue,
}) {
  return (
    <div className="input__wrapper">
      {label ? <label className="input__label">{label}</label> : null}

      <select onChange={(e) => handleChange(e.target.value)}>
        {
          !_.isEmpty(data) && data.map((opt) => (
            <option
              selected={(defaultValue && opt.id === defaultValue)}
              key={opt.id}
              value={opt.id}
            >
              {opt.title}
            </option>
          ))
        }
      </select>
    </div>
  );
}

SelectComponent.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number,
};

SelectComponent.defaultProps = {
  defaultValue: null,
  data: [],
  label: '',
};

export default SelectComponent;
