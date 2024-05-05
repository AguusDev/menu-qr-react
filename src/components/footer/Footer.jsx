import React from 'react'
import facebook from "../../assets/img/redes/facebook.png"
import twiter from "../../assets/img/redes/twiter.png"
import tiktok from "../../assets/img/redes/tiktok.png"
import instagram from "../../assets/img/redes/instagram.png"
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="redes-container">
            <img className='redes-item' src={facebook} alt="facebook" />
            <img className='redes-item' src={twiter} alt="twiter" />
            <img className='redes-item' src={tiktok} alt="tiktok" />
            <img className='redes-item' src={instagram} alt="instagram" />
        </div>
        <div className="copy-container">
            <p className="copy-item">©copyright 2024 - Eleva Desarrollos - Todos los derechos reservados</p>
        </div>
    </div>
  )
}

export default Footer;