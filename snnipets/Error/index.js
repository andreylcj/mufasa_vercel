import React from 'react';

function Error({ message }) {
  return (
    <div className="alert alert-error">
      <i className="fas fa-exclamation-triangle" />
      <p>{message}</p>
    </div>
  );
}

export default Error;
