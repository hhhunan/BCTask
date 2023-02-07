import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

function Loader({ size, borderColor }) {
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor,
  };

  return (
    <ClipLoader
      loading
      cssOverride={override}
      size={size}
    />
  );
}

Loader.propTypes = {
  size: PropTypes.number,
  borderColor: PropTypes.string,
};

Loader.defaultProps = {
  size: 25,
  borderColor: '#FFFFFF',
};

export default Loader;
