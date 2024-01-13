"use client"

import React from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize('G-FT7QFYKVW4');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        {/* Include Google Analytics script here */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-FT7QFYKVW4`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FT7QFYKVW4');
          `}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
