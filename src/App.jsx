import Header from './components/header'
import AboutMe from './components/about-me'
import TechnologyStack from './components/technology-stack'
import './css/App.css'

function App() {
  return (
    <div className="App">
      <div className="blue__waves waves">
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div className="red__waves waves">
          <div></div>
          <div></div>
          <div></div>
      </div>
      <Header />
      <AboutMe />
      <TechnologyStack />
    </div>
  )
}

export default App;