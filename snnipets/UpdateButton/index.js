import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';

function UpdateButton({ onClick, loading, textContent }) {
  return (
    <button
      type="submit"
      className="btn btn-dark"
      onClick={onClick}
    >
      {
                        loading
                          ? (
                            <>
                              <Loading />
                            </>
                          ) : (
                            textContent
                          )
                    }
    </button>
  );
}

UpdateButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UpdateButton;
