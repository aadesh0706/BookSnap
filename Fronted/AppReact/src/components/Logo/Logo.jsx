import React from 'react'
import './Logo.css'
import LogoImg from '../../../public/assets/images/logo.png';

function Logo() {
  return (
    <div className='nav-logo'>
        <img src={LogoImg} alt="" />
        <h1>BOOKSNAP</h1>
    </div>
    
  )
}

export default Logo
