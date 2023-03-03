import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

let hiddenElements = document.getElementsByClassName("hidden")
console.log(hiddenElements)

for (let index = 0; index < hiddenElements.length; index++) {
    console.log(hiddenElements[index])
}

for (let el of hiddenElements) {
    console.log(el)
}

Array.from(hiddenElements).forEach(el => { console.log(el) })