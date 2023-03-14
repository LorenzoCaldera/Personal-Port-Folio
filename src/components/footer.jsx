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
        <div className="footer__bottom d-flex align-center">
            <p>&copy; 2023 Lorenzo Caldera</p>
            <button onClick={handleScrollTop}><span>GO UP</span></button>
        </div>
    </section>
  )
}

export default Footer