import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

let mouseTracker = document.getElementsByClassName("mouse-tracker"),
    scroll

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
    }, {duration: 1000, fill: "forwards"})
}