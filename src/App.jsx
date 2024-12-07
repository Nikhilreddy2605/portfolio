import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import Projects from './components/projects'
import Service from './components/services'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App