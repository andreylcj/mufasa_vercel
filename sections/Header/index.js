import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';
import SubNavWalletOptions from '../../snnipets/SubNavWalletOptions';
import TimeOptionBar from '../../snnipets/TimeOptionBar';
import useWindowSize from '../../assets/utils/GetWindowDimensions';

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
`;

const Nav = styled.nav`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  background-color: rgb(255, 255, 255);
  height: ${({ theme }) => theme.measuresPatterns.header.height.general};
  padding: 0px 1rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;
  will-change: transform;
  transition: transform 0.2s ease 0s;
  background-color: #fff;

  @media (max-width: 768px){
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px){
    height: ${({ theme }) => theme.measuresPatterns.header.height.minWidth1024};
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
  
  @media (min-width: 768px){
    height: 100%;
  }  

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    display: flex;
    position: relative;

    @media (min-width: 768px){
      height: 100%;
    }  

    li{
      @media (min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
      }  
    }

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

    .selected-nav-li{
      /*border-top: 5px solid ${({ theme }) => theme.colors.mufasaOrange};*/
    }

    .selected-nav-a{
      color: ${({ theme }) => theme.colors.mufasaOrange};
    }

    a.selected-nav-a:hover{
      color: #c95206;
    }

    a:hover{
      color: #fda46b;
    }
  }
`;

NavOptions.ItemBg = styled.div`
  position: absolute;
  top: 0;
  height: 5px;
  background: ${({ theme }) => theme.colors.mufasaOrange};
  pointer-events: none;
  transition: all ease-out 0.25s;
`;

function Header() {
  const router = useRouter();
  const { pathname, query } = router;
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const lpHeader = [
    {
      title: 'Início',
      href: '/',
      query: { },
    },
    {
      title: 'Produtos',
      href: '/sobre-nos',
      query: {
        scroll: '',
      },
      scroll: '#produtos',
    },
    {
      title: 'Sobre Nós',
      href: '/sobre-nos',
      query: { },
    },
    {
      title: 'Contato',
      href: '/contato',
      query: { },
    },
    {
      title: 'Conteúdo',
      href: '/conteudo',
      query: { },
    },
  ];

  const [navTitles, setNavTitles] = useState(lpHeader);
  const [showMobile, setShowMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [elementBgLeft, setElementBgLeft] = useState(3);
  const [elementBgWidth, setElementBgWidth] = useState(0);
  const [itemsInfo, setItemsInfo] = useState([]);

  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (pathname.indexOf('bend-admin') !== -1) {
      if (pageTitle.indexOf('bend-admin') !== -1) {
        setPageTitle('bend-admin');
        setItemsInfo((previous) => ([]));

        setNavTitles([
          {
            title: 'Website',
            href: '/',
            query: { },
          },
          {
            title: 'My Profile',
            href: '/bend-admin/profile',
            query: { },
          },
          {
            title: 'Users',
            href: '/bend-admin/users',
            query: { },
          },
        ]);
      }
    } else if (
      // Object.keys(auth).length !== 0
    // && pathname.indexOf('bend-admin') === -1
      pathname === '/carteira' || pathname === '/imposto-de-renda'
    ) {
      if (pageTitle !== 'afterLogin') {
        setPageTitle('afterLogin');
        setItemsInfo((previous) => ([]));

        setNavTitles([
          {
            title: 'Carteira',
            href: '/carteira',
            query: { },
          },
          {
            title: 'Imposto de Renda',
            href: '/imposto-de-renda',
            query: { },
          },
        ]);
      }
    } else if (pageTitle !== 'landingPage') {
      setItemsInfo((previous) => ([]));
      setPageTitle('landingPage');
      setNavTitles(lpHeader);
    }
  }, [pathname]);

  const handleClickToShowMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  useEffect(() => {
    if (itemsInfo.length === 0) return;

    let selectedOption = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].href === pathname
      && Object.keys(itemsInfo[i].query).length === Object.keys(query).length
      ) {
        selectedOption = i;
        break;
      }
    }

    let left = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex < selectedOption) {
        left += itemsInfo[i].elementWidth;
      }
    }

    let width;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex === selectedOption) {
        width = itemsInfo[selectedOption].elementWidth;
        break;
      }
    }

    setElementBgLeft(left);
    setElementBgWidth(width);
  }, [pathname, itemsInfo]);

  /* useEffect(() => {
    if (itemsInfo.length === 0) return;
    let left = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex < selectedIndex) {
        left += itemsInfo[i].elementWidth;
      }
    }

    let width;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex === selectedIndex) {
        width = itemsInfo[i].elementWidth;
        break;
      }
    }

    setElementBgLeft(left);
    setElementBgWidth(width);
  }, [selectedIndex, itemsInfo]); */

  const updateItemsInfo = (data) => {
    setItemsInfo((prevItemsInfo) => {
      let indexToExclude = -1;
      for (let i = 0; i < prevItemsInfo.length; i++) {
        if ((prevItemsInfo[i].elementIndex === data.elementIndex)) {
          indexToExclude = i;
          break;
        }
      }

      let newArray = prevItemsInfo.slice();
      if (indexToExclude >= 0) {
        newArray = [...newArray.slice(0, indexToExclude),
          ...newArray.slice(indexToExclude + 1, newArray.length)];
      }
      return ([...newArray, data]);
    });
  };

  return (
    <>
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
              const navTitleId = `navTitle__${navTitle.href}_${index}`;
              return (
                <NavTitle
                  updateParentState={updateItemsInfo}
                  index={index}
                  title={navTitle.title}
                  href={navTitle.href}
                  pathname={pathname}
                  key={navTitleId}
                  item={navTitle}
                  query={query}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                />
              );
            })
          }
              <NavOptions.ItemBg
                style={{
                  width: elementBgWidth,
                  left: elementBgLeft,
                }}
              />
            </ul>
          </NavOptions>

          <ButtonUnderlineHover
            href="/login"
            color="#c95206"
            bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
            hide
          >
            Login
            <i className="fas fa-sign-in-alt" style={{ marginLeft: '10px' }} />
          </ButtonUnderlineHover>

          <MobileLinks
            showMobile={showMobile}
            navTitles={navTitles}
            pathname={pathname}
            onClick={handleClickToShowMobileMenu}
          />

          <ButtonShowMenu onClick={handleClickToShowMobileMenu} showMobile={showMobile} />

        </Nav>

      </HeaderContainer>
      <SubNavWalletOptions />
      <TimeOptionBar />
    </>
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
`;

function MobileLinks({
  showMobile, navTitles, pathname, onClick,
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
      </NavOptions>
    </ContainerMobileLinks>
  );
}

function NavTitle({
  title, href, pathname, index, updateParentState, onClick, item, query,
}) {
  const [width, height] = useWindowSize();

  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    updateParentState(
      {
        elementWidth: ref.current ? ref.current.offsetWidth : 0,
        elementIndex: index,
        href,
        query: item.query.scroll === '' ? { scroll: '' } : {},
      },
    );
  }, [ref.current, width, query]);

  const destUrl = `${href}${(item.query.scroll === '') ? '?scroll' : ''}${item.scroll || ''}`;

  return (
    <li
      className={`${(pathname === href
      && Object.keys(item.query).length === Object.keys(query).length) ? 'selected-nav-li' : ''}`}
      ref={ref}
    >
      <Link href={destUrl}>
        <a
          className={`${(pathname === href
      && Object.keys(item.query).length === Object.keys(query).length) ? 'selected-nav-a' : ''}`}
          onClick={onClick}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

export default Header;
