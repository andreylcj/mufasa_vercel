import React from 'react';
import styled from 'styled-components';

const ButtonContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button{
    min-width: 193px;
    height: 50px;
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.mufasaOrange};
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    transition: all 0.4s;
    border: none;
    font-weight: 700;
    outline: none;

    i{
      margin-left: 7px;
      transform: translateX(0);
      transition: all 0.4s;
    }

    &:hover{
      i{
        transform: translateX(10px);
      }

      background: #793408;
    }
  }
`;

function SubmitButton({ children, arrowIcon }) {
  return (
    <ButtonContain>
      <button
        type="submit"
      >
        {children}
        {
          arrowIcon ? (
            <i className="fas fa-long-arrow-alt-right" />
          ) : (
            null
          )
        }

      </button>
    </ButtonContain>
  );
}

export default SubmitButton;
