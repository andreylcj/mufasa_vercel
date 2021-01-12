import React from 'react'
import Layout from '../layout/Layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp