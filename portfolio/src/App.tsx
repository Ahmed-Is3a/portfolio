import { Hero, Projects, Experience, Skills, Contact } from './components'

function App() {
  return (
    <div className="text-gray-900">
      <Hero />
      <main>
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
