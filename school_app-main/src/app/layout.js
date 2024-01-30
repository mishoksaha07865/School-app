
import Footer from './components/Footer'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserret = Montserrat({subsets:['cyrillic']})
export const revalidate = 60
export const metadata = {
  title: 'E-School',
  description: 'All Information of E-School',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
    <body className={montserret.className}>
      <Logo/><Navbar/>{children}<Footer/></body>
    </html>
  )
}
