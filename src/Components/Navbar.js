import React from 'react';
import Logo from '../Images/Logo.png';
import hamburger from '../Images/hamburger.png'
import "../Components/Styles/Navbar.css"


const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <div className='left-nav'>
          <img src={Logo} className="Logo"/>
        </div>
            

        <div className='right-nav'>
          <div className='profile'>
              <p>DH</p>
          </div>
          <img src={hamburger} className="menu-icon" />
        </div>

    </div>
  )
}

export default Navbar

