import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme ? savedTheme === 'dark' : true
  })
  const [colorScheme, setColorScheme] = useState(() => {
    return localStorage.getItem('portfolio-color-scheme') || 'blue'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', colorScheme)
    localStorage.setItem('portfolio-color-scheme', colorScheme)
  }, [colorScheme])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light')
  }

  const toggleColorScheme = (scheme) => {
    setColorScheme(scheme)
    document.documentElement.setAttribute('data-color-scheme', scheme)
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <ScrollProgress />
      <BackToTop />
      <Navbar
        onToggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        colorScheme={colorScheme}
        onColorSchemeChange={toggleColorScheme}
      />
      <main className="page-stack">
        <Hero colorScheme={colorScheme} darkMode={darkMode} />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
