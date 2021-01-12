import React from 'react'
import '../assets/styles/global.css';
import Layout from '../layout/Layout';
import Head from 'next/head'
import { DataProvider } from '../store/GlobalState'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <DataProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </DataProvider>
        </>
    )
}

export default MyApp