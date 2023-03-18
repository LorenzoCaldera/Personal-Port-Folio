import React from 'react'

import Header from './components/header'
import AboutMe from './components/about-me'
import TechnologyStack from './components/technology-stack'
import Projects from './components/projects'
import ContactMe from './components/contact-me'
import Footer from './components/footer'

import './css/circles.css'
import './css/color-text.css'
import './css/light-waves.css'
import './css/mouse-tracker.css'

import './css/App.css'
import './css/projects.css'
import './css/header.css'
import './css/about-me.css'
import './css/technology-stack.css'
import './css/contact-me.css'
import './css/side-bar.css'
import './css/languages.css'

function App() {
  return (
    <React.Fragment>
      <span className="mouse-tracker circle" />
      <span className="mouse-tracker cursor" />
      <div className="blue__circles circles">
        <div />
        <div />
        <div />
      </div>
      <div className="red__circles circles">
        <div />
        <div />
        <div />
      </div>
      <Header />
      <AboutMe />
      <TechnologyStack />
      <Projects />
      <ContactMe />
      <Footer />
    </React.Fragment>
  )
}

export default App;