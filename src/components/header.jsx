import React from "react"
import Logo from "../images/logo-example.png"
import SideBar from "./side-bar"
import ChooseLanguage from "./language"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
function Header() {
    const [languageSpan, setLanguage] = React.useState({"open": false})
    const language = languageSpan.open ? <ChooseLanguage /> : "" 
    return (
        <nav className="navbar">
            <img alt="page-logo" src={Logo} />
            <div>
                <a className="nav__item" href="/#about">About me</a>
                <a className="nav__item" href="/#technology">Technology stack</a>
                <a className="nav__item" href="/#projects">Projects</a>
                <a className="nav__item" href="/#contact">Contact</a>
            </div>
            <SideBar />
            <FontAwesomeIcon
                id="language-icon"
                icon={faGlobe}
                onClick={() => {setLanguage({open: true})}}
            />
            {language}
        </nav>
    )
}

export default Header