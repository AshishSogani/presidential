import React from 'react'
import Header from '../../Componments/Frontend/Common/Header'
import Footer from '../../Componments/Frontend/Common/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout