import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Features from './components/Features'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import './App.css'
import './components/VisualElements.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 8,
    size: Math.random() * 2 + 1
  }))

  return (
    <div className="App">
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator">
        <motion.div 
          className="scroll-progress"
          style={{ width: `${scrollProgress * 100}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Global Visual Elements */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      {/* Grid Pattern Overlay */}
      <div className="grid-pattern" />

      {/* Noise Texture */}
      <div className="noise-texture" />

      {/* Main Content */}
      <Hero />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  )
}

export default App