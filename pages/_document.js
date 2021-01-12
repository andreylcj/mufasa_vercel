import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" type="text/css" href="/librarys/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="/librarys/font-awesome/css/all.min.css" />
                    <link rel="shortcut icon" type="image/jpg" href="/images/logos/original_logo.png" />
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