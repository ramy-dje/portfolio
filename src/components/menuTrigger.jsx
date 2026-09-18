import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Magnetic from '../utils/Magnetic';
import { theBlack, theRed } from '../utils/colors';
import LanguageSelector from './LanguageSelector';

function MenuTrigger() {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || '#home'
  );
  const [shouldShowBorder, setShouldShowBorder] = useState(false);

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
      const shouldShowBorder = window.scrollY > window.innerHeight;
      setShouldShowBorder(shouldShowBorder);
    };

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
                className={`md:w-20 w-16 md:h-20 h-16 rounded-full flex flex-col items-center justify-center gap-2 cursor-pointer ${
                  shouldShowBorder && 'border-[1px] border-gray-100'
                }`}
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
            className="fixed top-0 right-0 h-full md:w-[35%] w-full bg-[#111] text-white p-8 z-60 shadow-2xl overflow-y-auto"
          >
            {/* Close & Language Button Row */}
            <div className="flex items-center justify-between mb-6">
              <LanguageSelector isBlack={false} />
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
            <div className="space-y-10">
              {/* Navigation */}
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
                  {t('menu.navigation')}
                </p>
                <div className="w-full h-px bg-white/10 mb-6"></div>
                <ul className="space-y-5 text-3xl font-light leading-normal">
                  {[
                    { href: '/#skills', label: t('nav.skills') },
                    { href: '/#projects', label: t('nav.projects') },
                    { href: '/#experience', label: t('nav.experience') },
                    { href: '/#testimonials', label: t('nav.testimonials') },
                    { href: '/#contact', label: t('nav.contact') },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={toggleMenu}
                        className="transition-all duration-200 py-1 inline-flex items-center gap-3 focus:outline-none text-white text-3xl font-light hover:opacity-75"
                        style={{
                          fontSize: '2rem',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {currentHash === href && (
                          <span className="text-xs text-white inline-block">
                            ●
                          </span>
                        )}
                        <Magnetic modify={0.4}>{label}</Magnetic>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
                  {t('menu.socials')}
                </p>
                <div className="w-full h-px bg-white/10 mb-4"></div>
                <div className="flex flex-wrap gap-6 text-sm font-medium">
                  <Magnetic modify={0.4}>
                    <a
                      href="https://github.com/ramy-dje"
                      target="_blank"
                      className="transition-all duration-200 py-1 text-lg font-semibold hover:opacity-75"
                    >
                      GitHub
                    </a>
                  </Magnetic>
                  <Magnetic modify={0.4}>
                    <a
                      href="https://linkedin.com/in/rami-djebeli"
                      target="_blank"
                      className="transition-all duration-200 py-1 text-lg font-semibold hover:opacity-75"
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
