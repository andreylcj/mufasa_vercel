import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../sections/Header';
import Notify from '../sections/Short/Notify';
import Modal from '../snnipets/Modal';
import { DataContext } from '../store/GlobalState';
import Footer from '../sections/Footer';
import db from '../db.json';

const { theme } = db;

console.log();

const SiteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .no-translate{
    transform: translateY(0) !important;
    margin: auto;
    width: 100%;
  }

  .translate-wallet-page{
    transform: translateY(calc(
      ${theme.measuresPatterns.header.height.general}
      + ${theme.measuresPatterns.subNav.height.general}
      + ${theme.measuresPatterns.timeSelectBar.height.general}
      ));
  
    @media screen and (min-width: 1024px){
      transform: translateY(calc(
        ${theme.measuresPatterns.header.height.minWidth1024}
      + ${theme.measuresPatterns.subNav.height.general}
      + ${theme.measuresPatterns.timeSelectBar.height.general}
      ))
    }
  }
`;

const Main = styled.main`

  transform: translateY(64px);
  will-change: transform;
  text-align:center;

  @media screen and (min-width: 1024px){
    transform: translateY(80px);
  }
`;

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;

  const bgColor = (pathname === '/login') ? theme.colors.mufasaOrange : '';
  const translateSubNav = (pathname === '/carteira');
  const translate = (pathname.indexOf('/denied-access') !== -1 || pathname !== '/login');
  const showHeader = (pathname.indexOf('/denied-access') !== -1 || pathname !== '/login');
  const showFooter = (pathname.indexOf('/denied-access') !== -1 || pathname !== '/login');

  return (
    <SiteContainer
      style={{
        background: bgColor,
      }}
    >

      {
                // exclude header from page denied-access ========================
                showHeader
                  ? (
                    <Header />
                  ) : (
                    ''
                  )
            }

      {
                // notify only in bend ========================
                (pathname.indexOf('bend-admin') !== -1)
                  ? (
                    <Notify />
                  ) : (
                    ''
                  )
            }

      <Modal />

      <Main
        className={`${translate ? '' : 'no-translate'} ${translateSubNav ? 'translate-wallet-page' : ''}`}
      >
        {children}
        {
                // exclude footer from page denied-access ========================
                showFooter
                  ? (
                    <Footer />
                  ) : (
                    ''
                  )
            }
      </Main>

    </SiteContainer>
  );
}

export default Layout;
