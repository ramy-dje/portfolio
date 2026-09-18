import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../utils/Magnetic';

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'ar', label: 'العربية', short: 'ع' },
];

function LanguageSelector({ isBlack = false }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang =
    languages.find((l) => l.code === (i18n.language || 'fr')) || languages[1] || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Magnetic modify={0.3}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`navlink flex items-center gap-2 text-xl font-normal border-b border-current/40 hover:border-current pb-0.5 transition-all duration-200 cursor-pointer focus:outline-none ${
            isBlack ? 'text-black' : 'text-white'
          }`}
          aria-expanded={isOpen}
          title="Change language"
        >
          {/* Globe Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 opacity-80 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>

          <span className="uppercase tracking-wider font-medium">{currentLang.short}</span>

          <svg
            className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </Magnetic>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute end-0 mt-3 w-40 rounded-2xl border shadow-2xl p-1.5 z-50 overflow-hidden backdrop-blur-md ${
              isBlack
                ? 'bg-white/95 border-black/10 text-black shadow-black/10'
                : 'bg-[#181818]/95 border-white/15 text-white shadow-black/40'
            }`}
          >
            <div className="space-y-1">
              {languages.map((lang) => {
                const isSelected = currentLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors cursor-pointer text-start ${
                      isSelected
                        ? isBlack
                          ? 'bg-black/10 text-black font-semibold'
                          : 'bg-white/15 text-white font-semibold'
                        : isBlack
                        ? 'text-black/70 hover:text-black hover:bg-black/5'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{lang.label}</span>
                    <span className="text-xs uppercase opacity-50 font-mono tracking-wider">
                      {lang.short}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSelector;
