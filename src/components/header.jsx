import React from "react"
import Logo from "../images/logo-example.png"
import SideBar from "./side-bar"

function Header() {
    return (
        <nav className="navbar">
            <img src={Logo} />
            <div>
                <a className="nav__item" href="/#about">About me</a>
                <a className="nav__item" href="/#technology">Technology stack</a>
                <a className="nav__item" href="/#projects">Projects</a>
                <a className="nav__item" href="/#contact">Contact</a>
            </div>
            <SideBar />
        </nav>
    )
}

export default Header