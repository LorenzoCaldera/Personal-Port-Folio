import Header from './components/header'
import AboutMe from './components/about-me'
import TechnologyStack from './components/technology-stack'
import Projects from './components/projects'
import ContactMe from './components/contact-me'
import Footer from './components/footer'
import './css/App.css'

function App() {
  return (
    <div className="App">
      <div className="blue__circles circles max__height">
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div className="red__circles circles max__height">
          <div></div>
          <div></div>
          <div></div>
      </div>
      <Header />
      <AboutMe />
      <TechnologyStack />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App;