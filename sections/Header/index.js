import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

const HeaderContainer = styled.header`
  background-color: #fff;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 9;
  will-change: transform;
  font-weight: 500;
  font-size: 18px;

  @media(max-width: 768px){
    .hide{
      display: none;
    }
  }

  @media screen and (min-width: 1024px){
    height: 80px;
  }
`;

const Nav = styled.nav`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  background-color: rgb(255, 255, 255);
  height: 64px;
  padding: 0px 1rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;
  will-change: transform;
  transition: transform 0.2s ease 0s;
  background-color: #fff;

  @media (max-width: 768px){
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px){
    height: 80px;
  }
  @media screen and (min-width: 768px){
    padding: 0px 2rem;
  }
`;

const LogoContainer = styled.div`
  flex-grow: 0;
  a{
    display: flex;
    
    img{
      width: 55px;
      height: 55px;
    }

    @media(max-width: 768px){
      img{
        width: 50px;
        height: 50px;
      }
    }
  }
`;

const NavOptions = styled.div`
  margin-left: 20px;
  flex-grow: 1;

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    display: flex;

    a{
      text-decoration: none;
      color: #313131;

      @media (min-width: 768px){
        padding: 0px 20px;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
      }   
    }

    .selected-nav{
      color: #c95206;
    }

    a.selected-nav:hover{
      color: #c95206;
    }

    a:hover{
      color: #fda46b;
    }
  }
`;

function Header() {
  const router = useRouter();
  const pathName = router.pathname;

  const lpHeader = [
    {
      title: 'Início',
      href: '/',
    },
    {
      title: 'Produtos',
      href: '/produtos',
    },
    {
      title: 'Sobre Nós',
      href: '/sobre-nos',
    },
    {
      title: 'Contato',
      href: '/contato',
    },
    {
      title: 'Conteúdo',
      href: '/conteudo',
    },
  ];

  const [navTitles, setNavTitles] = useState(lpHeader);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    if (pathName.indexOf('bend-admin') !== -1) {
      setNavTitles([
        {
          title: 'Website',
          href: '/',
        },
        {
          title: 'My Profile',
          href: '/bend-admin/profile',
        },
        {
          title: 'Users',
          href: '/bend-admin/users',
        },
      ]);
    }
  }, [pathName]);

  const handleClickToShowMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer>
          <Link href="/">
            <a>
              <img src="/images/logo/icon.png" alt="Logo Mufasa" />
            </a>
          </Link>
        </LogoContainer>

        <NavOptions
          className="hide"
        >
          <ul>
            {
            navTitles.map((navTitle, index) => {
              const navTitleId = `navTitle__${index}`;
              return (
                <NavTitle
                  title={navTitle.title}
                  href={navTitle.href}
                  pathName={pathName}
                  key={navTitleId}
                />
              );
            })
          }
          </ul>
        </NavOptions>

        <ButtonUnderlineHover
          href="/entrar"
          color="#c95206"
          bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
          hide
          onClick={handleClickToShowMobileMenu}
        >
          Login
          <i className="fas fa-sign-in-alt" style={{ marginLeft: '10px' }} />
        </ButtonUnderlineHover>

        <MobileLinks
          showMobile={showMobile}
          navTitles={navTitles}
          pathName={pathName}
          onClick={handleClickToShowMobileMenu}
        />

        <ButtonShowMenu onClick={handleClickToShowMobileMenu} showMobile={showMobile} />

      </Nav>

    </HeaderContainer>
  );
}

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

const ContainerMobileLinks = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow-x: auto;
  background-color: rgb(255, 255, 255);
  position: absolute;
  left: 0px;
  right: 0px;
  top: 64px;
  height: calc(100vh - 64px);
  padding: 32px;
  display: flex;
  flex-direction: column;
  transform: translateY(-100vh);
  transition: transform 0.2s ease-out 0s;
  will-change: transform;

  &:{
    .show-mobile-menu{
      transform: translateY(0) !important;
    } 
  }
`;

function MobileLinks({
  showMobile, navTitles, pathName, onClick,
}) {
  const styleMobile = showMobile ? 'translateY(0)' : 'translateY(-100vh)';
  return (
    <ContainerMobileLinks
      style={{
        transform: styleMobile,
      }}
    >
      <NavOptions>
        <ul style={{ display: 'inherit' }}>
          {
            navTitles.map((navTitle, index) => {
              const navTitleId = `navTitle__${index}`;
              return (
                <li
                  key={navTitleId}
                  style={{ marginBottom: '8px' }}
                >
                  <Link href={navTitle.href}>
                    <a
                      className={pathName === navTitle.href ? 'selected-nav' : ''}
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
          href="/entrar"
          color="#c95206"
          bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
          otherStyles={{ marginLeft: '0' }}
          onClick={onClick}
        >
          Login
          <i className="fas fa-sign-in-alt" style={{ marginLeft: '10px' }} />
        </ButtonUnderlineHover>
      </NavOptions>
    </ContainerMobileLinks>
  );
}

function NavTitle({ title, href, pathName }) {
  return (
    <li>
      <Link href={href}>
        <a className={`${pathName === href ? 'selected-nav' : ''}`}>
          {title}
        </a>
      </Link>
    </li>
  );
}

export default Header;
