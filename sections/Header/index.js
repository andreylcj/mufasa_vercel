import React, {
  useState, useEffect, useContext,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';
import SubNavWalletOptions from './SubNavWalletOptions';
import TimeOptionBar from './TimeOptionBar';
import { headerNavTitles } from '../../constants';
import HeaderContainer from '../../components/Header';
import NavTitle from '../../snnipets/Header/NavTitle';
import MobileLinks from './MobileLinks';
import ButtonShowMenu from '../../snnipets/Header/ButtonShowMenu';
import FadeOut from '../../components/FadeOutHorizontal';
import TaxTimeBar from './TaxTimeBar';
import UserInfoOnHover from '../../snnipets/Header/UserInfoOnHover';

function Header() {
  const router = useRouter();
  const { pathname, query } = router;
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const [navTitles, setNavTitles] = useState(headerNavTitles.landingPage);
  const [showMobile, setShowMobile] = useState(false);

  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (pathname.indexOf('bend-admin') !== -1) {
      if (pageTitle.indexOf('bend-admin') !== -1) {
        setPageTitle('bend-admin');

        setNavTitles(headerNavTitles.bend);
      }
    } else if (
      pathname.indexOf('/carteira') !== -1 || pathname.indexOf('/imposto-de-renda') !== -1
    ) {
      if (pageTitle !== 'afterLogin') {
        setPageTitle('afterLogin');

        setNavTitles(headerNavTitles.afterLogin);
      }
    } else if (pageTitle !== 'landingPage') {
      setPageTitle('landingPage');
      setNavTitles(headerNavTitles.landingPage);
    }
  }, [pathname]);

  const handleClickToShowMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContainer.Nav>
          <HeaderContainer.LogoContainer>
            <Link href="/">
              <a>
                <img src="/images/logo/icon.png" alt="Logo Mufasa" />
              </a>
            </Link>
          </HeaderContainer.LogoContainer>

          <HeaderContainer.NavOptions
            className="hide"
          >
            <ul>
              {
            navTitles.map((navTitle, index) => {
              const navTitleId = `navTitle__${navTitle.href}_${index}`;
              return (
                <NavTitle
                  index={index}
                  title={navTitle.title}
                  href={navTitle.href}
                  pathname={pathname}
                  key={navTitleId}
                  item={navTitle}
                  query={query}
                />
              );
            })
          }
            </ul>
          </HeaderContainer.NavOptions>

          <FadeOut />

          {
            pageTitle === 'landingPage' ? (
              <ButtonUnderlineHover
                href="/login"
                color="#c95206"
                bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
                hide
              >
                Login
                <i className="fas fa-sign-in-alt" style={{ marginLeft: '10px' }} />
              </ButtonUnderlineHover>
            ) : (
              <UserInfoOnHover />
            )
          }

          <MobileLinks
            showMobile={showMobile}
            navTitles={navTitles}
            pathname={pathname}
            onClick={handleClickToShowMobileMenu}
          />

          <ButtonShowMenu
            onClick={handleClickToShowMobileMenu}
            showMobile={showMobile}

          />

        </HeaderContainer.Nav>

      </HeaderContainer>
      <SubNavWalletOptions />
      <TimeOptionBar />
      <TaxTimeBar />
    </>
  );
}

export default Header;
