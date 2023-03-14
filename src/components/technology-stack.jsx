import React from "react"
import { nanoid } from "nanoid"
import scrollEff from "../assets/scroll-eff"

import JSLogo from "../images/javascript-logo.png"
import HTMLLogo from "../images/html-logo.png"
import CSSLogo from "../images/css-logo.png"
import ReactLogo from "../images/react-logo.png"
import NodeJSLogo from "../images/nodeJS-logo.png"
import MySQLLogo from "../images/MySQL-logo.png"
import AWSLogo from "../images/AWS-logo.png"

function TechnologyStack () {
    const [technologyClass, setTechnologyClass] = React.useState("show")
    const technologyRef = React.useRef()

    scrollEff([technologyRef], [setTechnologyClass])

    const colorText = (string) => {
        let letters = string.split("")
        return letters.map((e) => {
            return <span key={`text-color-${nanoid()}`}>{e}</span>
        })
    }

    return (
    <section id="technology" ref={technologyRef} className={technologyClass}>
        <div className="light__waves waves__left">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className="light__waves waves__right">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h1 className="color__text">{colorText("TECHNOLOGY STACK")}</h1>
        <p>I use the technologies most demanded by the market in web development. Full stack: server administration, front-end and back-end.</p>
        <div className="tech__img">
            <img src={HTMLLogo} />
            <img src={CSSLogo} />
            <img src={JSLogo} />
            <img src={ReactLogo} />
            <img src={NodeJSLogo} />
            <img src={MySQLLogo} />
            <img src={AWSLogo} />
        </div>
    </section>
    )
}

export default TechnologyStack