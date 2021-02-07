import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

    a:hover{
      color: #c95206;
    }
  }
`;

const DeskLoginButon = styled.div`
  flex-grow: 0;
  margin-left: 16px;
  margin-right: 16px;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #c95206;
    transition: background-size 0.2s ease-in-out 0s;
    background-image: linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%);
    background-repeat: no-repeat;
    background-position: 0px 100%, 100% 100%;
    background-size: 0 8%;
    i{
      margin-left:10px;
    }

    &:hover{
      background-size: 100% 8%;
    }
  }
`;

function Header() {
  const router = useRouter();
  const pathName = router.pathname;
  const [navTitles, setNavTitles] = useState([]);

  useEffect(() => {
    if (pathName.indexOf('bend-admin') === -1) {
      setNavTitles([
        {
          title: 'Início',
          href: '/',
        },
        {
          title: 'Produtos',
          href: '/',
        },
        {
          title: 'Sobre Nós',
          href: '/',
        },
        {
          title: 'Contato',
          href: '/',
        },
        {
          title: 'Conteúdo',
          href: '/',
        },
      ]);
    } else {
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

        <NavOptions>
          <ul>
            {
            navTitles.map((navTitle, index) => {
              const navTitleId = `navTitle__${index}`;
              return (
                <NavTitle title={navTitle.title} href={navTitle.href} key={navTitleId} />
              );
            })
          }
          </ul>
        </NavOptions>

        <DeskLoginButon>
          <Link href="/entrar">
            <a>
              Login
              <i className="fas fa-sign-in-alt" />
            </a>
          </Link>
        </DeskLoginButon>

      </Nav>
    </HeaderContainer>
  );
}

function NavTitle({ title, href }) {
  return (
    <li>
      <Link href={href}>
        <a>
          {title}
        </a>
      </Link>
    </li>
  );
}

export default Header;
