import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

function UserTitle({ children, noBorder, href }) {
  return (
    <UserTitleContainer>
      <Link href={href}>
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
  href: PropTypes.string.isRequired,
};

UserTitle.defaultProps = {
  noBorder: false,
};

export default UserTitle;
