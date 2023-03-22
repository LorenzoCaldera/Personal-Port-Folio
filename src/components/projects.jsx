import React from "react"
import { useTranslation } from "react-i18next"

import scrollEff from "../assets/scroll-eff"
import ToDoList from "../images/to-do-list.png"

function Projects () {
    const [projectsClass, setProjectsClass] = React.useState("show")
    const projectsRef = React.useRef()

    const { t } = useTranslation()

    scrollEff([projectsRef], [setProjectsClass])
    return (
        <section id="projects" ref={projectsRef} className={projectsClass}>
            <h1>PROJECTS</h1>
            <div className="d-flex">
                <div>
                    <h2>TO-DO LIST: </h2>
                    <p>{t('todo_list')}</p>
                    <div className="projects__buttons">
                        <button disabled className="visit-btn btn__hover-eff">See live</button>
                        <a target="_blank" href="https://github.com/LorenzoCaldera/Task-List">
                            <button className="code-btn btn__color-eff">
                                <span className="colors-layer">
                                    <span className="first-layer" />
                                    <span className="second-layer" />
                                    <span className="third-layer" />
                                </span>
                                <span className="text-move">
                                    <div className="main-text">Source code</div>
                                    <div className="secon-text">Source code</div>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                <img src={ToDoList} />
            </div>
        </section>
    )
}

export default Projects