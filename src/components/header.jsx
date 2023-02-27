import React from "react"
import Logo from "../images/logo-example.png"

function Header() {
    return (
        <nav className="navbar d-flex align-center">
            <img src={Logo} />
            <div>
                <a className="nav__item" href="/#about">About me</a>
                <a className="nav__item" href="/#projects">Projects</a>
                <a className="nav__item" href="/#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Header