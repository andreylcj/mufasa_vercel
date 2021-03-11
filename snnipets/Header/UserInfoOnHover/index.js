import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: #C95206;
  display: flex;
  justifyContent: center;
  alignItems: center;
  cursor: pointer;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: rgb(255 255 255 / 100%);
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;

  transition: all 0.2s;

  &:hover{
    background-color: rgb(255 99 0 / 10%);
    .user-options{
      opacity: 1;
      transform: translateY(0);
      pointer-events: initial;
    }

    .show-focus-overlay{
      opacity: .1;
    }
  }
`;

Container.OptionsBox = styled.div`
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
`;

Container.SmoothFocusOnElement = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: #000;
  z-index: 100;
  pointer-events: none;
  cursor: none;
  transition: all 0.2s;
`;

function UserInfoOnHover() {
  return (
    <Container>
      <span>
        user.email@gmail.com
      </span>
      <i className="fas fa-caret-down" style={{ marginLeft: '11px', fontSize: '20px' }} />
      <Container.OptionsBox className="user-options">
        <UserTitle>
          Meus Dados
        </UserTitle>
        <UserTitle>
          Sincronizar dados do CEI
        </UserTitle>
        <UserTitle noBorder>
          Sair
          <i
            className="fas fa-sign-out-alt"
            style={{
              marginLeft: '10px',
            }}
          />
        </UserTitle>
      </Container.OptionsBox>
      <Container.SmoothFocusOnElement className="show-focus-overlay" />
    </Container>
  );
}

function UserTitle({ children, noBorder }) {
  return (
    <UserTitleContainer>
      <Link href="/">
        <a className={noBorder ? 'no-border' : ''}>
          {children}
        </a>
      </Link>
    </UserTitleContainer>
  );
}

const UserTitleContainer = styled.div`
display: flex;
justify-content: center;
alignt-items: center;

  a{
    padding: 15px 20px;
    width: 100%;
    border-bottom: 1px solid #70707050;
    color: #707070;
    font-size: 0.9rem;
    transition: all 0.3s;

    i{
      color: ${({ theme }) => theme.colors.mufasaOrange}
    }

    &:hover{
      background: rgba(0 0 0 / 5%);
      background: #ec6915;
      box-shadow: 0 0 10px 2px #ec6915;
      transform: scale(1.05);
      color: #fff;
      font-weight: 500;

      i{
        color: #fff;
      }
    }
  }
  .no-border{
    border-bottom: none;
  }
`;

UserTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  noBorder: PropTypes.bool,
};

UserTitle.defaultProps = {
  noBorder: false,
};

export default UserInfoOnHover;
