import React from 'react'
import MagneticButton from './MagneticButton'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { opacity,slideUp } from '../utils/animate';

function About() {
  const about = useRef(null);
  const isInView = useInView(about, { once: true, amount: 0.3 });

 

  const intro = `Creating digital solutions for brands to stand out in the digital era
          by using the magic of code and creativity together we will set the new
          status always on the cutting edge`;
          
  // Split the intro text into words
  const words = intro.split(/\s+/);

  return (
    <section id='about' className='py-16 md:px-32 px-4 flex md:flex-row flex-col md:justify-between'>
      <div ref={about} className='md:w-[50%] w-full md:text-4xl text-xl flex flex-wrap'>
        {words.map((word, index) => (
          <div key={index} className="overflow-hidden mr-2 mb-2 relative">
            <motion.span
              custom={index}
              variants={slideUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="inline-block"
            >
              {word}
            </motion.span>
          </div>
        ))}
      </div>
      <motion.div 
        variants={opacity}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className='mt-16 font-light relative'
      >
        <p className='w-[200px]'>
          my passion for problem solving and writing code are my fuel in the my tech journy
        </p>
        <div className='flex md:justify-start justify-end'>
          <a  href='#projects'>
            <MagneticButton isSMall={typeof window !== 'undefined' && window.innerWidth < 500} title={'my work'}/>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default About