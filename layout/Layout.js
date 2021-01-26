import React from 'react';
import Header from '../sections/Header';
import Notify from '../snnipets/Notify';
import Modal from '../snnipets/Modal';
import { useRouter } from 'next/router'
import BendHeader from '../sections/BendHeader';

function Layout({ children }) {

    const router = useRouter()
    const pathName = router.pathname

    return (
        <div className="container">

            {
                // exclude header from page denied-access ========================
                (pathName.indexOf("denied-access") !== -1) ?
                    (
                        ''
                    ) : (pathName.indexOf("bend-admin") !== -1) ? (
                        <BendHeader />
                    ) : (
                            <Header />
                        )
            }

            {
                // notify only in bend ========================
                (pathName.indexOf("bend-admin") !== -1) ?
                    (
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
