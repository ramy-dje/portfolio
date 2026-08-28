import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import MenuTrigger from '../components/menuTrigger';
import ExperienceTimeline from '../components/timeline';
import Testimonials from '../components/Testimonials';

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
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Main;
