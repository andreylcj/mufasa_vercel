import React, { useState } from 'react';
import styled from 'styled-components';
import SmoothFocusBack from '../../SmoothFocusBack';
import UserOptionsBox from '../UserOptionsBox';

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

  @media(max-width: 767px){
    display: none;
  }

  &:hover{
    background-color: rgb(255 99 0 / 10%);
  }

  .user-options{
    opacity: 1;
    transform: translateY(0);
    pointer-events: initial;
  }

  .show-focus-overlay{
    opacity: .2;
  }
`;

function UserInfoOnHover() {
  const [show, setShow] = useState(false);
  return (
    <Container onClick={() => setShow(!show)}>
      <span>
        user.email@gmail.com
      </span>
      <i className="fas fa-caret-down" style={{ marginLeft: '11px', fontSize: '20px' }} />
      <UserOptionsBox className={show ? 'user-options' : ''} />
      <SmoothFocusBack
        className={show ? 'show-focus-overlay' : ''}
        show={show}
        onClick={() => setShow(!show)}
      />
    </Container>
  );
}

export default UserInfoOnHover;
