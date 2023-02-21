import React from "react"
import JSLogo from "../images/javascript-logo.png"
import HTMLLogo from "../images/html-logo.png"
import CSSLogo from "../images/css-logo.png"
import ReactLogo from "../images/react-logo.png"
import NodeJSLogo from "../images/nodeJS-logo.png"
import MySQLLogo from "../images/MySQL-logo.png"
import AWSLogo from "../images/AWS-logo.png"

function AboutMe() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let interval = null

    const textEffect = (e) => {

        // TEXT EFFECT - CREDITS TO HYPERPLEXED

        let iteration = 0
                
        clearInterval(interval)

        interval = setInterval(() => {
            e.target.innerText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return e.target.dataset.value[index]
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("")
            
            if(iteration >= e.target.dataset.value.length){ 
                clearInterval(interval)
            }
            
            iteration += 1 / 3
        }, 30)
    }

    return (
        <section id="about" className="d-flex aling-center">
            <div className="blue__waves waves">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1
                onMouseOver={textEffect}
                data-value="LORENZO CALDERA WEB DEVELOPER"
            >LORENZO CALDERA WEB DEVELOPER</h1>
            <div className="horizontal__line"></div>
            <div className="red__waves waves">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div id="technology">
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
            </div>
        </section>
    )
}

export default AboutMe