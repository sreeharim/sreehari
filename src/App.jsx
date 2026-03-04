import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticleEffect from './components/ParticleEffect'

function App() {
  return (
    <div className="app-container">
      <ParticleEffect />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
