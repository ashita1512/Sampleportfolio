import React from 'react'
import './header.css'
import CTA from './CTA'
import DESKTOP  from '../../assets/desktop.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Chhavi Sood</h1>
          <h5 className='text-light'>Designer</h5>
          <CTA />
          <HeaderSocials />

          <div className='desktop'>
             <img src={DESKTOP} alt='desktop'  />              
          </div>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header