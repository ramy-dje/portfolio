import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import MenuTrigger from '../components/menuTrigger';
import ExperienceTimeline from '../components/timeline';

function Main() {
  return (
    <div>
      {/*<PreLoader />*/}
      <Hero />
      <MenuTrigger />
      <About />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <Contact />
    </div>
  );
}

export default Main;
