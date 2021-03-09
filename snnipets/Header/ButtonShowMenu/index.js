import React from 'react';
import styled from 'styled-components';

const ButtonOpenMobile = styled.button`
  background: #fff;
  border: none;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;

  @media(min-width: 768px){
    display: none;
  }

  &:focus{
    background-color: ${({ theme }) => theme.colors.verySoftMufasaOrange};
    outline: none;
  }

  &:active{
    background-color: #f5b18a;
    outline: none;
  }

  i{
    color: rgb(17,17,17);
  }
`;

function ButtonShowMenu({ onClick, showMobile }) {
  return (
    <ButtonOpenMobile onClick={onClick}>
      {
       showMobile ? (
         <i className="fas fa-times" />
       ) : (
         <i className="fas fa-bars" />
       )
     }
    </ButtonOpenMobile>
  );
}

export default ButtonShowMenu;
