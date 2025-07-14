import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { slideUp } from '../utils/animate';
import Magnetic from '../utils/Magnetic';

function About() {
  const intro = `Creating digital solutions for brands to stand out in the digital era
    by using the magic of code and creativity together we will set the new
    status always on the cutting edge`;

  const words = intro.split(/\s+/);

  return (
    <section
      id="about"
      className="md:py-16 py-10 md:px-32 px-4 flex flex-wrap h-screen lg:text-[65px] md:text-[45px] text-[35px] gap-4"
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
