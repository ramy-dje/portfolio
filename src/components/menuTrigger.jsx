import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../utils/Magnetic';
import { theBlack, theRed } from '../utils/colors';

function MenuTrigger() {
  const [showButton, setShowButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || '#home'
  );

  useEffect(() => {
    const handleHashChange = () =>
      setCurrentHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const checkVisibility = () => {
      const shouldShow = window.innerWidth < 758 || window.scrollY > 100;
      setShowButton(shouldShow);
    };

    // Run once on mount
    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            transition={{ duration: 0.4 }}
            className="fixed top-4 right-4 z-50"
            onClick={toggleMenu}
          >
            <Magnetic modify={0.4}>
              <div
                className="md:w-20 w-16 md:h-20 h-16 rounded-full flex flex-col items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: theBlack }}
              >
                <div className="md:w-8 w-6 h-[2px] bg-white rounded-full" />
                <div className="md:w-8 w-6 h-[2px] bg-white rounded-full" />
              </div>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full md:w-[35%] w-full bg-[#111] text-white p-8 z-60 shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-10">
              <Magnetic modify={0.4}>
                <div
                  onClick={toggleMenu}
                  className="md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-full cursor-pointer"
                  style={{ backgroundColor: theRed }}
                >
                  <span className="md:text-3xl text-2xl">✕</span>
                </div>
              </Magnetic>
            </div>

            {/* Menu Content */}
            <div className="space-y-12">
              {/* Navigation */}
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                  Navigation
                </p>
                <ul className="space-y-6 text-3xl font-light leading-normal">
                  {[
                    { href: '/#about', label: 'About' },
                    { href: '/#skills', label: 'Skills' },
                    { href: '/#projects', label: 'Projects' },
                    { href: '/#experience', label: 'Experience' },
                    { href: '/#contact', label: 'Contact' },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className={`transition-all duration-200 px-4 py-2 rounded-lg inline-flex items-center gap-2 focus:outline-none text-white text-3xl font-light ${
                          currentHash === href ? 'relative' : ''
                        }`}
                        style={{
                          fontSize: '2.8rem',
                          letterSpacing: '0.03em',
                        }}
                      >
                        <span
                          className={`mr-2 transition-colors duration-200`}
                          style={{
                            fontSize: '1.5rem',
                            width: '1.2em',
                            display: 'inline-block',
                            color:
                              currentHash === href ? '#fff' : 'transparent',
                          }}
                        >
                          ●
                        </span>
                        <Magnetic modify={0.4}>{label}</Magnetic>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                  Socials
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <Magnetic modify={0.4}>
                    <a
                      href="https://github.com/ramy-dje"
                      target="_blank"
                      className="transition-all duration-200 px-4 py-2 rounded-lg  text-lg font-semibold"
                    >
                      GitHub
                    </a>
                  </Magnetic>
                  <Magnetic modify={0.4}>
                    <a
                      href="https://linkedin.com/in/rami-djebeli"
                      target="_blank"
                      className="transition-all duration-200 px-4 py-2 rounded-lg  text-lg font-semibold"
                    >
                      LinkedIn
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuTrigger;
