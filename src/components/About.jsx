import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { slideUp } from '../utils/animate';
import Magnetic from '../utils/Magnetic';

function About() {
  const intro = `Building robust technical solutions for businesses to solve real problems in a digital world by combining engineering and craftsmanship together we will create lasting impact always focused on meaningful results`;

  const words = intro.split(/\s+/);

  return (
    <section
      id="about"
      className="md:py-16 py-10 md:px-32 px-4 flex flex-wrap h-screen text-[28px] sm:text-[40px] lg:text-[55px] gap-4"
    >
        {words.map((word, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ref = useRef(null);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isInView = useInView(ref, {
          once: true,
          margin: '0px 0px -10% 0px',
        });

        return (
          <div key={index} ref={ref} className="overflow-hidden relative">
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
        );
      })}
    </section>
  );
}

export default About;
