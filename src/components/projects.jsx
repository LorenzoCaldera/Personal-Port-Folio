import React from "react"
import ToDoList from "../images/to-do-list.png"

function Projects () {
    return (
        <section id="projects">
            <h1>PROJECTS</h1>
            <div className="d-flex">
                <div>
                    <h2>TO-DO LIST: </h2>
                    <p>This application is developed in React and has several useful features, including a messaging chat, a to-do list, and a calendar.</p>
                    <div className="projects__buttons">
                        <button className="disabled visit-btn btn__hover-eff">See live</button>
                        <a href="https://github.com/LorenzoCaldera/Task-List">
                            <button className="code-btn btn__color-eff">
                                <span className="colors-layer">
                                    <span className="first-layer"></span>
                                    <span className="second-layer"></span>
                                    <span className="third-layer"></span>
                                </span>
                                <span className="text-move">
                                    <a className="main-text">Source code</a>
                                    <a className="secon-text">Source code</a>
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