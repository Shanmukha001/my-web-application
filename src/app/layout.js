import { Header } from '@/Header'
import './globals.css'
import './media.css'
import { Menu } from '@/Menu'
import { Footer } from '@/Footer'

import 'bootstrap/dist/css/bootstrap.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Menu />
        {children}
        <Footer />
        </body>
    </html>
  )
}
