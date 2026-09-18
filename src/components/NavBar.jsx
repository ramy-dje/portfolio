import React from 'react';
import Magnetic from '../utils/Magnetic';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function NavBar({ isBlack }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      className="flex justify-between items-center p-5 text-lg z-20"
      style={{ color: isBlack ? 'black' : 'white' }}
    >
      <div
        onClick={() => navigate('/')}
        className="flex gap-2 cursor-pointer z-20"
      >
        <h1 className="text-xl">&copy; {t('nav.codeBy')}</h1>
      </div>
      <div className="hidden md:flex gap-8 text-xl items-center">
        <Magnetic>
          <a href="/#skills" className="navlink">
            {t('nav.skills')}
          </a>
        </Magnetic>
        <Magnetic>
          <a href="/#projects" className="navlink">
            {t('nav.projects')}
          </a>
        </Magnetic>
        <Magnetic>
          <a href="/#experience" className="navlink">
            {t('nav.experience')}
          </a>
        </Magnetic>
        <Magnetic>
          <a href="/#testimonials" className="navlink">
            {t('nav.testimonials')}
          </a>
        </Magnetic>
        <Magnetic>
          <a href="/#contact" className="navlink">
            {t('nav.contact')}
          </a>
        </Magnetic>
        <LanguageSelector isBlack={isBlack} />
      </div>
    </div>
  );
}

export default NavBar;
