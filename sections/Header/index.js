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

function Header() {
  const router = useRouter();
  const { pathname, query } = router;
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const [navTitles, setNavTitles] = useState(headerNavTitles.landingPage);
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
        setItemsInfo([]);

        setNavTitles(headerNavTitles.bend);
      }
    } else if (
      pathname.indexOf('/carteira') !== -1 || pathname.indexOf('/imposto-de-renda') !== -1
    ) {
      if (pageTitle !== 'afterLogin') {
        setPageTitle('afterLogin');
        setItemsInfo([]);

        setNavTitles(headerNavTitles.afterLogin);
      }
    } else if (pageTitle !== 'landingPage') {
      setItemsInfo([]);
      setPageTitle('landingPage');
      setNavTitles(headerNavTitles.landingPage);
    }
  }, [pathname]);

  const handleClickToShowMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  useEffect(() => {
    if (itemsInfo.length === 0) return;

    let selectedOption = -1;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].href === pathname
        || itemsInfo[i].href.split('/')[1] === pathname.split('/')[1]) {
        selectedOption = i;
        break;
      }
    }

    if (pageTitle === 'afterLogin' && selectedOption < 0) {
      for (let i = 0; i < itemsInfo.length; i++) {
        if (query.periodo) {
          selectedOption = i;
          break;
        }
      }
    }

    if (pageTitle === 'landingPage') {
      if (query.scroll === '') {
        for (let i = 0; i < itemsInfo.length; i++) {
          if (itemsInfo[i].query.scroll) selectedOption = i;
          break;
        }
      } else {
        for (let i = 0; i < itemsInfo.length; i++) {
          if (itemsInfo[i].href === pathname
            && itemsInfo[i].query.scroll !== ''
          ) {
            selectedOption = i;
            break;
          }
        }
      }
    }

    if (selectedOption < 0) {
      setElementBgLeft(0);
      setElementBgWidth(0);
      return;
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
              <HeaderContainer.NavOptions.ItemBg
                style={{
                  width: elementBgWidth,
                  left: elementBgLeft,
                  maxWidth: elementBgWidth,
                }}
              />
            </ul>
          </HeaderContainer.NavOptions>

          <FadeOut />

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

          <ButtonShowMenu
            onClick={handleClickToShowMobileMenu}
            showMobile={showMobile}

          />

        </HeaderContainer.Nav>

      </HeaderContainer>
      <SubNavWalletOptions />
      <TimeOptionBar />
    </>
  );
}

export default Header;
