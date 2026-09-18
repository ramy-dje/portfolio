import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { slideUp } from '../utils/animate';
import Magnetic from '../utils/Magnetic';

function About() {
  const { t } = useTranslation();
  const intro = t('about.intro');

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
      className="md:py-16 py-10 md:px-32 px-4 flex flex-wrap text-[28px] sm:text-[40px] lg:text-[55px] gap-4"
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
