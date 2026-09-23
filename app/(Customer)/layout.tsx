import React from 'react'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import Header from '../components/Header/Header'
import InfoShowCase from '../components/InfoShowcase/InfoShowCase'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <InfoShowCase/>
          <Header/>
          <Cart/>
          {children}
          <Footer/>
    </>
  )
}
