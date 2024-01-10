import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Provider from '@/SessionProvider'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devscribe',
  description: 'Cut the carp off',
}

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
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
  )
}
