import './globals.css';
import Header from './header';
import Footer from './footer';
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
        <body>
          <Header />
          {children}
          <Footer/>
        </body>
    </html>
  )
}
