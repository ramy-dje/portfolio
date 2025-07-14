import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { theGray } from '../utils/colors';
import NavBar from './NavBar';
import Magnetic from '../utils/Magnetic';

function Hero() {
  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (marqueeRef.current) {
        setWidth(marqueeRef.current.scrollWidth / 6); // since we have 2 copies
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section
      className={` h-screen flex flex-col relative`}
      style={{ backgroundColor: theGray }}
    >
      <NavBar isBlack={false} />
      <img
        src="ramy.png"
        alt=""
        className="md:h-screen h-[90%] absolute bottom-0 right-[50%] translate-x-1/2  object-cover z-20"
      />
      <div className="absolute top-[40px] right-[50%] translate-x-1/2 md:w-[750px] w-[350px] h-[750px] rounded-full bg-[#D9D9D9] z-4 blur-[80px]"></div>
      <div className="text-white absolute md:top-[40%] bottom-[20px] md:text-3xl text-lg left-4 md:left-auto md:right-6 lg:right-16 z-50">
        <Magnetic modify={0.2}>
          <p>Located in</p>
        </Magnetic>
        <Magnetic modify={0.2}>
          <div className="flex flex-row items-baseline ">
            <img
              src="location.png"
              alt=""
              className="md:w-8 w-6 animate-move-up-down"
            />
            <p>Constantine, Algeria</p>
          </div>
        </Magnetic>
      </div>
      <div className="text-white absolute md:top-[40%] top-[40%] md:text-3xl text-md right-4 md:right-auto md:left-6 lg:left-16 z-10 md:block hidden ">
        <Magnetic modify={0.2}>
          <p>I am a</p>
        </Magnetic>
        <Magnetic modify={0.2}>
          <p>Software Engineer</p>
        </Magnetic>
      </div>
      <div className="absolute bottom-16 z-30 w-full h-[270px] overflow-hidden flex items-center">
        <motion.div
          className="flex gap-12 text-white whitespace-nowrap"
          ref={marqueeRef}
          animate={{ x: [-0, -width] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          }}
          style={{ x: 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex md:gap-12 gap-4 whitespace-nowrap">
              <p className="lg:text-[240px] md:text-[170px] text-[120px] md:leading-24 leading-12 z-10">
                Djebeli Ramy
              </p>
              <div className="lg:h-[20px] md:h-[15px] h-[10px] md:w-[200px] w-[130px] bg-white md:mt-16 mt-8"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
