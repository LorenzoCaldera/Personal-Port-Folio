import React from 'react'
import Logo from "../images/logo-example.png"
// import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section id="footer">
        <div className="footer__top">
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="social">
                {/* <a href="https://www.instagram.com/"><FaInstagram /></a>
                <a href="https://github.com/"><FaGithub /></a>
                <a href="mailto:email@miempresa.com"><FaEnvelope /></a> */}
            </div>
        </div>
        <div className="footer__bottom d-flex align-center">
            <p>&copy; 2023 Lorenzo Caldera</p>
            <button onClick={handleScrollTop}><span>GO UP</span></button>
        </div>
    </section>
  )
}

export default Footer