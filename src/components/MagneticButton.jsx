import React from 'react';
import { theRed } from '../utils/colors';
import { motion } from 'framer-motion';
import Magnetic from '../utils/Magnetic';
import PropTypes from 'prop-types';

function MagneticButton({
  title,
  isSMall = false,
  onClick,
  loading = false,
  success = false,
  disabled = false,
}) {
  const size = isSMall ? '130px' : '180px';

  return (
    <Magnetic modify={0.9}>
      <button
        onClick={onClick}
        className={`text-white rounded-full font-light text-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden ${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        style={{
          backgroundColor: loading ? `${theRed}CC` : theRed, // 80% opacity if loading
          height: size,
          width: size,
        }}
        disabled={disabled}
      >
        {loading ? (
          <span className="inline-block animate-spin w-8 h-8 border-[3px] border-white border-t-transparent rounded-full" />
        ) : success ? (
          <svg
            className="w-24 h-24 p-2 text-white animate-check"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 27 l8 8 l16 -16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="36"
              strokeDashoffset="36"
            />
          </svg>
        ) : (
          <span className="z-10 relative text-base font-medium tracking-wide">
            {title}
          </span>
        )}
      </button>

      <style>{`
        @keyframes check {
          0% { stroke-dashoffset: 36; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-check path {
          animation: check 0.5s ease forwards;
        }
      `}</style>
    </Magnetic>
  );
}

MagneticButton.propTypes = {
  title: PropTypes.string.isRequired,
  isSMall: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MagneticButton;
