import React from 'react';
import { useRouter } from 'next/router';

function GoBackButton(props) {
  const router = useRouter();

  const handleBack = () => {
    if (props.url) {
      router.push(props.url);
    } else {
      router.back();
    }
  };

  return (
    <div className="mb-4">
      <button className="btn btn-dark" onClick={handleBack} type="button">
        <i className="fas fa-long-arrow-alt-left" />
        {' '}
        Voltar
      </button>
    </div>
  );
}

export default GoBackButton;
