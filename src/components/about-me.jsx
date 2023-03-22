import React from "react"
import scrollEff from "../assets/scroll-eff"

import { useTranslation } from "react-i18next"

function AboutMe() {
    const [welcomeClass, setWelcomeClass] = React.useState("show")
    const welcomeRef = React.useRef()

    const { t } = useTranslation()

    const [parragraphClass, setparragraphClass] = React.useState("show")
    const parragraphRef = React.useRef()

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#%?<>"
    let interval = null

    scrollEff([welcomeRef, parragraphRef], [setWelcomeClass, setparragraphClass])

    const textEffect = (e) => {

        // TEXT EFFECT - CREDITS TO HYPERPLEXED

        let iteration = 0

        clearInterval(interval)

        interval = setInterval(() => {
            e.target.innerText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    if (letter === " ") return " "
                    if (index < iteration) return e.target.dataset.value[index]
                    return letters[Math.floor(Math.random() * 36)]
                })
                .join("")

            if(iteration >= e.target.dataset.value.length) clearInterval(interval)

            iteration += 1 / 3
        }, 30)
    }
    return (
        <section id="about">
            <header ref={welcomeRef} className={`welcome ${welcomeClass}`}>
                <div>
                    <h1>{t('welcome')}</h1>
                    <h1
                        onMouseOver={textEffect}
                        data-value="LORENZO CALDERA, WEB DEVELOPER"
                    >LORENZO CALDERA, WEB DEVELOPER</h1>
                    <div className="horizontal__line" />
                    <h2>FULL STACK DEVELOPER.</h2>
                </div>
            </header>
            <div ref={parragraphRef} className={parragraphClass} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p>{t('first_paragraph')}</p>
                <p>{t('second_paragraph')}</p>
                <p>{t('third_paragraph')}</p>
                <p>{t('fourth_paragraph')}</p>
            </div>
        </section>
    )
}

export default AboutMe