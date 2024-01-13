// src/app/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize('G-FT7QFYKVW4');

    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    // When the component is mounted, set up the Google Analytics tracking
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, stop tracking
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
