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
    <section id="technology" className="d-flex align-center flex-column">
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
            transform="rotate(180)"
            version="1.1"
            viewBox="0 0 1440 130"
        >
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop offset="0%" stopColor="rgba(22, 22, 22, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(22, 22, 22, 1)"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient-0)"
                d="M0 91l48-13c48-13 144-39 240-47.7 96-8.3 192-.3 288 13C672 56 768 74 864 82.3c96 8.7 192 8.7 288 0 96-8.3 192-26.3 288-28.1 96-2.2 192 10.8 288 17.3s192 6.5 288 10.8c96 4.7 192 12.7 288 17.4 96 4.3 192 4.3 288 4.3s192 0 288-10.8c96-11.2 192-32.2 288-39 96-6.2 192 1.8 288 13 96 10.8 192 23.8 288 19.5 96-4.7 192-25.7 288-39 96-12.7 192-17.7 288-4.4 96 12.7 192 43.7 288 56.4 96 13.3 192 8.3 288-2.2s192-28.5 288-41.2c96-13.3 192-21.3 288-13C5568 52 5664 78 5760 78s192-26 288-39 192-13 288-2.2c96 11.2 192 32.2 288 39 96 6.2 192-1.8 240-6.5l48-4.3v65H0z"
            ></path>
        </svg>
        <h1 className="color__text">{colorText("TECHNOLOGY STACK")}</h1>
        <p>I use the technologies most demanded by the market in web development. Full stack: server administration, front-end and back-end.</p>
        <div className="tech__img">
            <img src={HTMLLogo} className="hover-eff" />
            <img src={CSSLogo} className="hover-eff" />
            <img src={JSLogo} className="hover-eff" />
            <img src={ReactLogo} className="hover-eff" />
            <img src={NodeJSLogo} className="hover-eff" />
            <img src={MySQLLogo} className="hover-eff" />
            <img src={AWSLogo} className="hover-eff" />
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
            transform="rotate(180)"
            version="1.1"
            viewBox="0 0 1440 300"
        >
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="rgba(22, 22, 22, 1)"></stop>
                <stop offset="100%" stopColor="rgba(22, 22, 22, 1)"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient-0)"
                d="M0 270l60-15c60-15 180-45 300-65s240-30 360-45 240-35 360-35 240 20 360 15 240-35 360-20 240 75 360 100 240 15 360-10 240-65 360-65 240 40 360 65 240 35 360 20 240-55 360-65 240 10 360 25 240 25 360 40 240 35 360 10 240-95 360-100 240 55 360 50 240-75 360-75 240 70 360 100 240 20 360 5 240-35 360-40 240 5 360 10 240 5 360-5 240-30 360-45 240-25 300-30l60-5v210H0z"
            ></path>
            <defs>
                <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                    <stop offset="0%" stopColor="rgba(22, 22, 22, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(22, 22, 22, 1)"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient-1)"
                d="M0 0l60 5c60 5 180 15 300 50s240 95 360 100 240-45 360-80 240-55 360-60 240 5 360 45 240 110 360 145 240 35 360 5 240-90 360-115 240-15 360 0 240 35 360 30 240-35 360-15 240 90 360 85 240-85 360-125 240-40 360-40 240 0 360 40 240 120 360 115 240-95 360-110 240 45 360 60 240-15 360-15 240 30 360 40 240 0 360-15 240-35 360-40 240 5 360-10 240-55 300-75l60-20v300H0z"
                opacity="0.9"
                transform="translate(0 50)"
            ></path>
            <defs>
                <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
                    <stop offset="0%" stopColor="rgba(22, 22, 22, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(22, 22, 22, 1)"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient-2)"
                d="M0 90l60 5c60 5 180 15 300 10s240-25 360-40 240-25 360 0 240 85 360 90 240-45 360-45 240 50 360 80 240 40 360 5 240-115 360-110 240 95 360 120 240-15 360-30 240-5 360-20 240-55 360-50 240 55 360 60 240-35 360-45 240 10 360 30 240 40 360 45 240-5 360-20 240-35 360-30 240 35 360 35 240-30 360-40 240 0 360 10l360 30c120 10 240 20 360 25s240 5 300 5h60v90H0z"
                opacity="0.8"
                transform="translate(0 100)"
            ></path>
            <defs>
                <linearGradient id="sw-gradient-3" x1="0" x2="0" y1="1" y2="0">
                    <stop offset="0%" stopColor="rgba(22, 22, 22, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(22, 22, 22, 1)"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient-3)"
                d="M0 180l60-5c60-5 180-15 300 0s240 55 360 65 240-10 360-40 240-70 360-60 240 70 360 90 240 0 360-10 240-10 360-25 240-45 360-45 240 30 360 50 240 30 360 15 240-55 360-80 240-35 360-20 240 55 360 75 240 20 360 15 240-15 360-15 240 10 360 15 240 5 360 10 240 15 360 20 240 5 360-10 240-45 360-85 240-90 360-110 240-10 360 10 240 50 360 45 240-45 300-65l60-20v300H0z"
                opacity="0.7"
                transform="translate(0 150)"
            ></path>
        </svg>
    </section>
    )
}

export default TechnologyStack