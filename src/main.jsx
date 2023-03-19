import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

let mouseTracker = document.getElementsByClassName("mouse-tracker"),
    scroll = 0

window.onscroll = () => {
    scroll = window.scrollY
}

document.body.onpointermove = e => {
    const { clientX, clientY } = e

    mouseTracker[0].animate({
        top: `${clientY + scroll}px`,
        left: `${clientX}px`
    }, {duration: 3000, fill: "forwards"})

    mouseTracker[1].animate({
        top: `${clientY + scroll}px`,
        left: `${clientX}px`
    }, {duration: 100, fill: "forwards"})
}
