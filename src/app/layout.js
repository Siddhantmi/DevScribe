import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Provider from '@/SessionProvider';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Devscribe',
  description: 'Cut the carp off',
  googleAdsenseAccount: 'ca-pub-4583277760904170', 
  googleAnalyticsId: 'G-FT7QFYKVW4',
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          {/* Google AdSense script */}
          <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}></script>
          <script>
            {`
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "${metadata.googleAdsenseAccount}",
                enable_page_level_ads: true
              });
            `}
          </script>

          {/* Google Analytics script */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${metadata.googleAnalyticsId}`}></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${metadata.googleAnalyticsId}');
            `}
          </script>
        </Head>
        <ThemeContextProvider>
          <ThemeProvider>
            <Provider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </Provider>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
