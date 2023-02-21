import React from "react"
import Logo from "../images/logo-example.png"

function Header() {
    return (
        <nav className="navbar">
            <img src={Logo} />
            <div>
                <a className="nav__item" href="/about-me">About me</a>
                <a className="nav__item" href="/contact">Contact</a>
                <a className="nav__item" href="/projects">Projects</a>
            </div>
        </nav>
    )
}

export default Header