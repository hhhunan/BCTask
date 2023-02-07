import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

function ButtonComponent({ type, text, loading }) {
  return (
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      disabled={loading}
      className="create__user__btn"
    >
      { loading ? (<Loader />) : <p>{text}</p>}
    </button>
  );
}

ButtonComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  type: 'submit',
  loading: false,
};

export default ButtonComponent;
