import React from 'react'
import './header.css'
import CIA from './CIA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'></div>
      <h5>Hello I'm</h5>
      <h1>Amanuel Tefera</h1>
      <h5 className='test-light'>Fullstack Developer and Information Technology Specialist</h5>
      <CIA />
      <HeaderSocials />
      <div className='me'>
        <img src={ME} alt='' />
      </div>

      <a href='#contact' className='scroll_down'>Scroll Down</a>

    </header>
  )
}

export default Header