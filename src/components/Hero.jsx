import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { theGray } from '../utils/colors';
import NavBar from './NavBar';
import Magnetic from '../utils/Magnetic';

function Hero() {
  const { t, i18n } = useTranslation();
  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    function updateWidth() {
      if (marqueeRef.current) {
        setWidth(marqueeRef.current.scrollWidth / 6); // since we have 6 copies
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [i18n.language]);

  return (
    <section
      className={`h-screen flex flex-col relative overflow-hidden`}
      style={{ backgroundColor: theGray }}
    >
      <NavBar isBlack={false} />
      <img
        src="ramy.png"
        alt=""
        className="md:h-screen h-[85%] absolute bottom-0 right-[50%] translate-x-1/2 object-cover z-20 pointer-events-none"
      />
      <div className="absolute top-[40px] right-[50%] translate-x-1/2 md:w-[750px] w-[350px] h-[750px] rounded-full bg-[#D9D9D9] z-4 blur-[80px]"></div>

      {/* Located in - Positioned above the moving name on mobile */}
      <div className="text-white absolute bottom-[155px] sm:bottom-[175px] md:bottom-auto md:top-[40%] md:text-3xl text-base sm:text-lg left-4 sm:left-6 md:left-auto md:right-6 lg:right-16 z-40">
        <Magnetic modify={0.2}>
          <p>{t('hero.locatedIn')}</p>
        </Magnetic>
        <Magnetic modify={0.2}>
          <div className="flex flex-row items-baseline gap-1 mt-0.5">
            <img
              src="location.png"
              alt=""
              className="md:w-8 w-5 animate-move-up-down"
            />
            <p>{t('hero.location')}</p>
          </div>
        </Magnetic>
      </div>

      <div className="text-white absolute md:top-[40%] top-[40%] md:text-3xl text-lg right-4 md:right-auto md:left-6 lg:left-16 z-10 md:block hidden">
        <Magnetic modify={0.2}>
          <p>{t('hero.iam')}</p>
        </Magnetic>
        <Magnetic modify={0.2}>
          <p>{t('hero.softwareEngineer')}</p>
        </Magnetic>
      </div>

      {/* Moving Marquee at the bottom on mobile */}
      <div
        className="absolute bottom-0 md:bottom-16 z-30 w-full h-[150px] md:h-[270px] overflow-hidden flex items-center pointer-events-none"
        dir="ltr"
      >
        <motion.div
          key={isRTL ? 'marquee-ar' : 'marquee-ltr'}
          className="flex gap-8 md:gap-12 text-white whitespace-nowrap"
          ref={marqueeRef}
          animate={{ x: isRTL ? [-width, 0] : [0, -width] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          }}
          style={{ x: isRTL ? -width : 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex md:gap-12 gap-4 items-center whitespace-nowrap">
              <p className="lg:text-[240px] md:text-[170px] text-[100px] sm:text-[120px] leading-none z-10">
                {t('hero.name')}
              </p>
              <div className="lg:h-[20px] md:h-[15px] h-[8px] md:w-[200px] w-[100px] bg-white"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
