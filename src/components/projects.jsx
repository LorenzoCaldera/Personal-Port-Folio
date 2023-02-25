import React from "react"
import ToDoList from "../images/to-do-list.png"

function Projects () {
    return (
        <section id="projects" className="d-flex aling-center flex-column">
            <h1>PROJECTS</h1>
            <div className="d-flex">
                <div>
                    <h2>TO-DO LIST: </h2>
                    <p>This application is developed in React and has several useful features, including a messaging chat, a to-do list, and a calendar.</p>
                </div>
                <img src={ToDoList} />
            </div>
        </section>
    )
}

export default Projects