import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import PreLoader from '../components/PreLoader'

function Main() {
  const [stop, setstop] = useState(true)
  return (
    <div>
       {/* <PreLoader />*/}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Main