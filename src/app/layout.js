import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Provider from '@/SessionProvider';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const GTM_ID = 'GTM-T3B873Q5';

export const metadata = {
  title: 'Devscribe',
  description: 'Cut the carp off',
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={inter.className}>
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
