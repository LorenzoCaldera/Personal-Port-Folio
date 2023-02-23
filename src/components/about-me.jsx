import React from "react"

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
        </section>
    )
}

export default AboutMe