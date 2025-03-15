import React from "react"
import { useTranslation } from "react-i18next"

import scrollEff from "../assets/scroll-eff"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import projects from "../data/projectList"
// import ToDoList from "../images/to-do-list.png"


function Projects() {
    const [projectsClass, setProjectsClass] = React.useState("hide")
    const projectsRef = React.useRef()

    const { t } = useTranslation()

    // scrollEff([projectsRef], [setProjectsClass])
    return (
        <section id="projects" ref={projectsRef} className={projectsClass}>
            <h1>PROJECTS</h1>
            <ul className="project-list">
                {projects.map(el => {
                    return <li key={Math.random()}>
                        <div>
                            <header>
                                <FontAwesomeIcon icon={el.icon}/>
                                <h3>{el.name}</h3>
                            </header>
                            <p className="description">{el.description}</p>
                            <div className="tags">
                                {el.tags.map(tag => {
                                    return <div key={Math.random()}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                        <p>{tag}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="projects__buttons">
                            <button className="code-btn">
                                <a href={el.links.github}>GitHub</a>
                            </button>
                            <button className="visit-btn">
                                <a href={el.links.url}>View</a>
                            </button>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default Projects