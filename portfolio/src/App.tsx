import { Hero, Projects, Experience, Contact } from './components'

function App() {
  return (
    <div className="text-gray-900">
      <Hero />
      <main>
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
