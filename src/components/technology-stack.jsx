import React from "react"
import { nanoid } from "nanoid"
import JSLogo from "../images/javascript-logo.png"
import HTMLLogo from "../images/html-logo.png"
import CSSLogo from "../images/css-logo.png"
import ReactLogo from "../images/react-logo.png"
import NodeJSLogo from "../images/nodeJS-logo.png"
import MySQLLogo from "../images/MySQL-logo.png"
import AWSLogo from "../images/AWS-logo.png"

function TechnologyStack () {

    const colorText = (string) => {
        let letters = string.split("")
        return letters.map((e) => {
            return <span key={`text-color-${nanoid()}`}>{e}</span>
        })
    }

    return (
    <section id="technology">
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
        {/* <svg className="curve top__curve" viewBox="0 0 1000 100" width="1000" height="100"><path d="M0 25L33.3 26.5C66.7 28 133.3 31 200 40.5C266.7 50 333.3 66 400 60.5C466.7 55 533.3 28 600 27.7C666.7 27.3 733.3 53.7 800 61.8C866.7 70 933.3 60 966.7 55L1000 50L1000 101L966.7 101C933.3 101 866.7 101 800 101C733.3 101 666.7 101 600 101C533.3 101 466.7 101 400 101C333.3 101 266.7 101 200 101C133.3 101 66.7 101 33.3 101L0 101Z" fill="#161616" strokeLinecap="round" strokeLinejoin="miter"></path></svg> */}
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
        {/* <svg className="curve bottom__curve" viewBox="0 0 1000 100" width="1000" height="100"><path d="M0 30L27.8 39.3C55.7 48.7 111.3 67.3 166.8 69.7C222.3 72 277.7 58 333.2 56.2C388.7 54.3 444.3 64.7 500 59.7C555.7 54.7 611.3 34.3 666.8 35.2C722.3 36 777.7 58 833.2 64.7C888.7 71.3 944.3 62.7 972.2 58.3L1000 54L1000 0L972.2 0C944.3 0 888.7 0 833.2 0C777.7 0 722.3 0 666.8 0C611.3 0 555.7 0 500 0C444.3 0 388.7 0 333.2 0C277.7 0 222.3 0 166.8 0C111.3 0 55.7 0 27.8 0L0 0Z" fill="#161616" strokeLinecap="round" strokeLinejoin="miter"></path></svg> */}
    </section>
    )
}

export default TechnologyStack