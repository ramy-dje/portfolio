import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { slideUp } from '../utils/animate';
import Magnetic from '../utils/Magnetic';

function About() {
  const intro = `Building robust technical solutions for businesses to solve real problems in a digital world by combining engineering and craftsmanship together we will create lasting impact always focused on meaningful results`;

  const words = intro.split(/\s+/);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '0px 0px -10% 0px',
  });

  return (
    <section
      id="about"
      ref={containerRef}
      className="md:py-28 py-20 md:px-32 px-4 min-h-[50vh] md:min-h-[70vh] flex flex-wrap items-center content-center text-[26px] sm:text-[38px] lg:text-[52px] leading-[1.3] tracking-tight gap-x-3 gap-y-2.5"
    >
      {words.map((word, index) => (
        <div key={index} className="overflow-hidden relative inline-block">
          <Magnetic modify={0.1}>
            <motion.span
              custom={index}
              variants={slideUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              className="inline-block"
            >
              {word}
            </motion.span>
          </Magnetic>
        </div>
      ))}
    </section>
  );
}

export default About;
