import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" type="text/css" href="/librarys/bootstrap5/bootstrap.min.css" />
                    <script src="/librarys/jQuery/jquery-3.5.1.min.js" />
                    <script src="/librarys/bootstrap5/bootstrap.bundle.min.js" />
                    <link rel="stylesheet" type="text/css" href="/librarys/font-awesome/css/all.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument