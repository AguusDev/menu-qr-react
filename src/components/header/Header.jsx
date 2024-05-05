import React from 'react'
import imagen from '../../assets/img/logo_res.png'

const Header = () => {
  return (
    <>
      <header id='header'>
        <div className='logo-container'>
            <img className='logo' src={imagen} alt="logo" />
        </div>
      </header>
    </>
  )
}

export default Header