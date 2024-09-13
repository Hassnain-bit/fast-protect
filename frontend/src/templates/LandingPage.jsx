import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

function LandingPage({ children }) {
  return (
    <div className='fp-template-landing-page'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default LandingPage