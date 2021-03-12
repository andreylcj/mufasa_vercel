import React from 'react';
import styled from 'styled-components';
import UserTitle from './UserTitle';

function UserOptionsBox({ className }) {
  return (
    <OptionsBox className={className}>
      <UserTitle href="">
        Meus Dados
      </UserTitle>
      <UserTitle href="/app/dados-cei">
        Sincronizar dados do CEI
      </UserTitle>
      <UserTitle noBorder href="/">
        Sair
        <i
          className="fas fa-sign-out-alt"
          style={{
            marginLeft: '10px',
          }}
        />
      </UserTitle>
    </OptionsBox>
  );
}

const OptionsBox = styled.div`
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  top: calc(50% + 0.5rem + 10px);
  left: -30px;
  background: #fff;
  right: 0;
  transform: translateY(-20px);
  border: 1px solid #70707050;
  box-shadow: 0 0 10px 2px rgba(0 0 0 / 50%);
  pointer-events: none;
  z-index: 101;

  &:before{
    position: absolute;
    top: -6px;
    right: 17px;
    content: "";
    border-bottom: 6px solid #FFF;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }

  @media(max-width: 768px){
    width: 90vw;
    top: calc(50% + 0.5rem + 10px);
    right: 0;
    left: auto;

    &:before{
      position: absolute;
      top: -6px;
      right: 17px;
      content: "";
      border-bottom: 6px solid #FFF;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
`;

export default UserOptionsBox;
