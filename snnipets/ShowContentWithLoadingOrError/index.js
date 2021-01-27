import React from 'react';
import Loading from '../Loading';
import Error from '../Error';

function ShowContentWithLoadingOrError(props) {
  const { loading, error, children } = props;
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

export default ShowContentWithLoadingOrError;
