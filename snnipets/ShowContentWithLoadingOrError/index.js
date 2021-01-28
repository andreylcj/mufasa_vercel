import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import Error from '../Error';

function ShowContentWithLoadingOrError({ loading, error, children }) {
  return (
    <>
      {
                loading ? (
                  <Loading />
                ) : error ? (
                  <Error message={error} />
                ) : (
                  children
                )
            }
    </>
  );
}

ShowContentWithLoadingOrError.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.element,
};

ShowContentWithLoadingOrError.defaultProps = {
  loading: false,
  error: '',
  children: null,
};

export default ShowContentWithLoadingOrError;
