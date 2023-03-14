import React from "react"

function AboutMe() {
    const [welcomeClass, setWelcomeClass] = React.useState("show")
    const welcomeRef = React.useRef()

    const [parragraphClass, setparragraphClass] = React.useState("show")
    const parragraphRef = React.useRef()

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#%?<>"
    let interval = null

    React.useEffect(() => {
        const handlerScroll = (references, callback) => {
            const elements = [...references]
            const setClass = [...callback]

            elements.forEach((element, index) => {
                const { y } = element.current.getBoundingClientRect()
                const currentClass = (y < -window.innerHeight || y  > window.innerHeight) ? "hidden" : "show"
                setClass[index](currentClass)
            })
        }
    
        window.addEventListener('scroll', () => {handlerScroll([welcomeRef, parragraphRef], [setWelcomeClass, setparragraphClass])})
        return () => {window.removeEventListener('scroll', handlerScroll)}
    })

    const textEffect = (e) => {

        // TEXT EFFECT - CREDITS TO HYPERPLEXED

        let iteration = 0
                
        clearInterval(interval)

        interval = setInterval(() => {
            e.target.innerText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    if (letter === " ") return " "
                    if(index < iteration) {
                        return e.target.dataset.value[index]
                    }
                    return letters[Math.floor(Math.random() * 36)]
                })
                .join("")
            
            if(iteration >= e.target.dataset.value.length){ 
                clearInterval(interval)
            }
            
            iteration += 1 / 3
        }, 30)
    }
    return (
        <section id="about">
            <header ref={welcomeRef} className={`welcome ${welcomeClass}`}>
                <div>
                    <h1>WELCOME! I'M</h1>
                    <h1
                        onMouseOver={textEffect}
                        data-value="LORENZO CALDERA, WEB DEVELOPER"
                        >LORENZO CALDERA, WEB DEVELOPER</h1>
                    <div className="horizontal__line"></div>
                    <h2>FULL STACK DEVELOPER.</h2>
                </div>
            </header>
            <p ref={parragraphRef} className={parragraphClass}> Hi there! I'm a 17-year-old web developer passionate about programming and web design. My main focus is on creating functional web pages with an attractive design and clean, readable code.</p>
            <p ref={parragraphRef} className={parragraphClass}> As a full-stack developer, I have skills in both front-end and back-end development. This means that I can create the structure and functionality of the web page, as well as design the user interface and user experience. Additionally, I can configure servers to make the web pages available online for everyone.</p>
            <p ref={parragraphRef} className={parragraphClass}> I strive to stay up-to-date with the latest trends and technologies in web development to ensure that my web pages are always modern and relevant.</p>
            <p ref={parragraphRef} className={parragraphClass}> If you need a web developer who focuses on quality and efficiency, don't hesitate to get in touch with me! I'm always willing to work on new projects and excited to see how I can help you achieve your online goals.</p>
        </section>
    )
}

export default AboutMe