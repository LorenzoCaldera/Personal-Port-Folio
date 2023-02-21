import React from "react"
import '../css/header.css'

function Header() {
    return (
        <div className="navbar">
            <a>LOGO</a>
            <div>
                <a className="nav__item" href="/">Home</a>
                <a className="nav__item" href="/about-me">About me</a>
                <a className="nav__item" href="/contact">Contact</a>
                <a className="nav__item" href="/projects">Projects</a>
            </div>
        </div>
    )
}

export default Header