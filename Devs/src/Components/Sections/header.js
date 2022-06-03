import React from 'react'
import './Navbar'
import Navbar from './Navbar'
import "../../Header.css"
import Logo from '../../assets/Logo.jpg'

function Header() {
  return (
    <section id='header'>
      <header className='header'>
        <div className='header__logo'>
          <img title="Workshop Logo" src={Logo} alt="Sally"></img>
        </div>
        <Navbar/> 
      </header>
    </section>
  )
}

export default Header