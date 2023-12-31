import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () =>{
  return (
    <header>
    <div className="container header__container"> 
    <h5>ما </h5>
    <h1>هستیم dev404 </h1>
    <h5 className="text-light">طراحی و ساخت سایت</h5>
    <CTA />
    <HeaderSocials />
    <div className="me">
      <img src={ME} alt="me"/>
      
    </div>
    <a href="#content" className='scroll__down'> Scroll Down </a>
    </div>
    </header>
  )
}

export default Header