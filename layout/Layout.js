import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../sections/Header';
import Notify from '../snnipets/Notify';
import Modal from '../snnipets/Modal';
import BendHeader from '../sections/BendHeader';
import { DataContext } from '../store/GlobalState';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const router = useRouter();
  const pathName = router.pathname;

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

 /*useEffect(() => {
    if (Object.keys(auth).length !== 0 && !auth.user.admin && (pathName.indexOf('bend-admin') !== -1)) {
      router.push('/bend-admin/denied-access');
    }
  }, [pathName, auth]);*/

  return (
    <div className="container">

      {
                // exclude header from page denied-access ========================
                (pathName.indexOf('denied-access') !== -1)
                  ? (
                    ''
                  ) : (pathName.indexOf('bend-admin') !== -1) ? (
                    <BendHeader />
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

      <main className="text-center my-4">
        <div>
          {children}
        </div>
      </main>

    </div>
  );
}

export default Layout;
