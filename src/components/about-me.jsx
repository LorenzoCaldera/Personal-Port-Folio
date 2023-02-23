import React from "react"

function AboutMe() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#$%&/=?¿<>"
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
                    return letters[Math.floor(Math.random() * 46)]
                })
                .join("")
            
            if(iteration >= e.target.dataset.value.length){ 
                clearInterval(interval)
            }
            
            iteration += 1 / 3
        }, 20)
    }

    return (
        <section id="about" className="d-flex aling-center">
            <h1>HI, I'M</h1>
            <h1
                onMouseOver={textEffect}
                data-value="LORENZO CALDERA, WEB DEVELOPER"
            >LORENZO CALDERA, WEB DEVELOPER</h1>
            <div className="horizontal__line"></div>
            <h2>FULL STACK DEVELOPER.</h2>
            <p>Well structured and functional web pages. With a nice and functional design. Based on clean code and prevention. Practice creating and modifying web servers.</p>
        </section>
    )
}

export default AboutMe