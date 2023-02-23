import React from "react"
import JSLogo from "../images/javascript-logo.png"
import HTMLLogo from "../images/html-logo.png"
import CSSLogo from "../images/css-logo.png"
import ReactLogo from "../images/react-logo.png"
import NodeJSLogo from "../images/nodeJS-logo.png"
import MySQLLogo from "../images/MySQL-logo.png"
import AWSLogo from "../images/AWS-logo.png"

function TechnologyStack () {
    return (
    <section id="technology">
        <h2>TECHNOLOGY STACK</h2>
        <p>I use the technologies most demanded by the market in web development. Full stack: server administration, front-end and back-end</p>
        <div className="tech__img">
            <img src={HTMLLogo} className="hover-eff" />
            <img src={CSSLogo} className="hover-eff" />
            <img src={JSLogo} className="hover-eff" />
            <img src={ReactLogo} className="hover-eff" />
            <img src={NodeJSLogo} className="hover-eff" />
            <img src={MySQLLogo} className="hover-eff" />
            <img src={AWSLogo} className="hover-eff" />
        </div>
    </section>
    )
}

export default TechnologyStack