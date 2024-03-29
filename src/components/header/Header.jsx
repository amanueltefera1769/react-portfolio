import React from 'react'
import './header.css'
import CIA from './CIA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
      <h5>Hello I'm</h5>
      <h1>Amanuel Tefera</h1>
      <h5 className='test-light'>Fullstack Developer and Information Technology Specialist</h5>
      <div className='dark-mode1'>
          <input type="checkbox" id="dark-mode"/>
          <label for="dark-mode"></label>
          <div class="background"></div>
      </div>
      <CIA />
      <HeaderSocials />
      <div className='me'>
        <img src={ME} alt='' />
      </div>

      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header