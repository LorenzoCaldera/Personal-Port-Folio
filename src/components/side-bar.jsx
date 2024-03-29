import React from "react"
import ChooseLanguage from "./language"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

function SideBar () {
    const [sideBarState, setSideBarState] = React.useState(false)
    const [languageSpan, setLanguage] = React.useState({"open": false})

    const handlerToggleSideBar = () => {
        setSideBarState(!sideBarState)
    }

    return (
        <div id="side-bar" className={`${sideBarState ? "open" : "close"}`}>
            <svg className="menu" viewBox="0 0 100 100" width="80" onClick={() => {handlerToggleSideBar(); setLanguage({open: false})}}>
                <path
                    d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                    strokeDasharray= "40 172"
                />
                <path
                    d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                    strokeDasharray="20 172"
                />
            </svg>
            <span className="options">
                <div>
                    <div className="span__item">
                        <a
                            href="/#about"
                            onClick={handlerToggleSideBar}
                        >About me</a>
                    </div>
                    <div className="span__item">
                        <a
                            href="/#technology"
                            onClick={handlerToggleSideBar}
                        >Technology stack</a>
                    </div>
                    <div className="span__item">
                        <a
                            href="/#projects"
                            onClick={handlerToggleSideBar}
                        >Projects</a>
                    </div>
                    <div className="span__item">
                        <a
                            href="/#contact"
                            onClick={handlerToggleSideBar}
                        >Contact</a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>&copy; 2023 Lorenzo Caldera</p>
                    <FontAwesomeIcon
                        id="language-icon"
                        icon={faGlobe}
                        onClick={() => {setLanguage({open: !languageSpan.open})}}
                    />
                </div>
                {languageSpan.open ? <ChooseLanguage /> : "" }
            </span>
        </div>
    )
}

export default SideBar