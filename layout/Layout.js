import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../sections/Header';
import Notify from '../snnipets/Notify';
import Modal from '../snnipets/Modal';
import BendHeader from '../sections/BendHeader';
import { DataContext } from '../store/GlobalState';
import Footer from '../sections/Footer';

const Main = styled.main`

  transform: translateY(64px);
  will-change: transform;
  text-align:center;

  @media screen and (min-width: 768px){
    transform: translateY(64px);
  }
  @media screen and (min-width: 1024px){
    transform: translateY(80px);
  }
`;

function Layout({ children }) {
  const router = useRouter();
  const pathName = router.pathname;

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  useEffect(() => {
    //if (Object.keys(auth).length !== 0 && !auth.user.admin && (pathName.indexOf('bend-admin') !== -1)) {
    //  router.push('/bend-admin/denied-access');
    //}
  }, [pathName, auth]);

  return (
    <>

      {
                // exclude header from page denied-access ========================
                (pathName.indexOf('denied-access') !== -1)
                  ? (
                    ''
                  ) : (
                    <Header />
                  )
            }

      {
                // notify only in bend ========================
                (pathName.indexOf('bend-admin') !== -1)
                  ? (
                    <Notify />
                  ) : (
                    ''
                  )
            }

      <Modal />

      <Main>
        {children}
      </Main>

      {
                // exclude footer from page denied-access ========================
                (pathName.indexOf('denied-access') !== -1)
                  ? (
                    ''
                  ) : (
                    <Footer />
                  )
            }
    </>
  );
}

export default Layout;
