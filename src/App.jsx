import Nav from "./components/Nav"
import Header from "./Layout/Header"
import Skills from "./Layout/Skills"
import Work from "./Layout/Work"
import About from "./Layout/About"

function App() {

  return (
    <div className="bg-gray-800">
      <Nav />
      <Header />
      <Skills />
      <Work />
      <About />
    </div>
  )
}

export default App
