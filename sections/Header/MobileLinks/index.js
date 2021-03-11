import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import HeaderContainer from '../../../components/Header';
import ButtonUnderlineHover from '../../../snnipets/ButtonUnderlineHover';

function MobileLinks({
  showMobile, navTitles, pathname, onClick,
}) {
  const styleMobile = showMobile ? 'translateY(0)' : 'translateY(-100vh)';
  return (
    <HeaderContainer.ContainerMobileLinks
      style={{
        transform: styleMobile,
      }}
    >
      <HeaderContainer.NavOptions>
        <ul style={{ display: 'inherit' }}>
          {
            navTitles.map((navTitle, index) => {
              const navTitleId = `navTitle__${navTitle.href}_${index}`;
              return (
                <li
                  key={navTitleId}
                  style={{ marginBottom: '8px' }}
                >
                  <Link href={navTitle.href}>
                    <a
                      className={pathname === navTitle.href ? 'selected-nav' : ''}
                      onClick={onClick}
                    >
                      {navTitle.title}
                    </a>
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <ButtonUnderlineHover
          href="/login"
          color="#c95206"
          bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
          otherStyles={{ marginLeft: '0' }}
          onClick={onClick}
        >
          Login
          <i className="fas fa-sign-in-alt" style={{ marginLeft: '10px' }} />
        </ButtonUnderlineHover>
      </HeaderContainer.NavOptions>
    </HeaderContainer.ContainerMobileLinks>
  );
}

MobileLinks.propTypes = {
  showMobile: PropTypes.bool.isRequired,
  navTitles: PropTypes.arrayOf(PropTypes.any).isRequired,
  pathname: PropTypes.string,
  onClick: PropTypes.func,
};

MobileLinks.defaultProps = {
  onClick: () => {},
  pathname: '',
};

export default MobileLinks;
