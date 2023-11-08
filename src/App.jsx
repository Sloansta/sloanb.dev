import Nav from "./components/Nav"
import Header from "./Layout/Header"
import Skills from "./Layout/Skills"
import Work from "./Layout/Work"
import About from "./Layout/About"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-gray-800">
      <Nav />
      <Header id="home"/>
      <Skills id="skills"/>
      <Work id="work"/>
      <About id="about"/>
      <Footer />
    </div>
  )
}

export default App
