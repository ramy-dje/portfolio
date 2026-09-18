import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { slideUp } from '../utils/animate';
import Magnetic from '../utils/Magnetic';
import { programmingLanguages, categories } from '../utils/info';

const categoryIcons = [
  // Frontend
  <svg key="fe" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  // Backend
  <svg key="be" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>,
  // Mobile
  <svg key="mb" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>,
  // Other
  <svg key="ot" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
];

function Skills() {
  const { t } = useTranslation();
  const descriptionRef = useRef(null);
  const containerRef = useRef(null);
  const frameRef = useRef(0);

  const descriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.3,
  });

  const description = t('skills.description');
  const words = description.split(/\s+/);

  const [positions, setPositions] = useState([]);
  const [velocities, setVelocities] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({
    width: 800,
    height: 600,
  });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const newPositions = programmingLanguages.map(() => ({
      x: Math.random() * 80 - 40,
      y: Math.random() * 80 - 40,
      scale: 0.8 + Math.random() * 0.4,
      rotation: Math.random() * 30 - 15,
    }));
    const newVelocities = programmingLanguages.map(() => ({
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5,
    }));
    setPositions(newPositions);
    setVelocities(newVelocities);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!positions.length || !velocities.length) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const isMobile = containerSize.width < 768;
      const offset = isMobile ? 28 : 48;
      const maxX = containerSize.width / 2 - offset;
      const maxY = containerSize.height / 2 - offset;
      const newPositions = [...positions];
      const newVelocities = [...velocities];
      const bubbleRadius = isMobile ? 16 : 24;
      const friction = 0.98;
      const bounce = 0.7;

      for (let i = 0; i < newPositions.length; i++) {
        newPositions[i].x += newVelocities[i].x;
        newPositions[i].y += newVelocities[i].y;
        newVelocities[i].x *= friction;
        newVelocities[i].y *= friction;

        const scaledRadius = bubbleRadius * newPositions[i].scale;

        if (newPositions[i].x * 10 > maxX - scaledRadius) {
          newPositions[i].x = (maxX - scaledRadius) / 10;
          newVelocities[i].x = -Math.abs(newVelocities[i].x) * bounce;
        } else if (newPositions[i].x * 10 < -maxX + scaledRadius) {
          newPositions[i].x = (-maxX + scaledRadius) / 10;
          newVelocities[i].x = Math.abs(newVelocities[i].x) * bounce;
        }

        if (newPositions[i].y * 10 > maxY - scaledRadius) {
          newPositions[i].y = (maxY - scaledRadius) / 10;
          newVelocities[i].y = -Math.abs(newVelocities[i].y) * bounce;
        } else if (newPositions[i].y * 10 < -maxY + scaledRadius) {
          newPositions[i].y = (-maxY + scaledRadius) / 10;
          newVelocities[i].y = Math.abs(newVelocities[i].y) * bounce;
        }

        const dx = newPositions[i].x * 10 - mousePosition.x;
        const dy = newPositions[i].y * 10 - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 150;
        const maxRepulsion = 0.5;

        if (distance < repulsionRadius) {
          const repulsion =
            ((repulsionRadius - distance) / repulsionRadius) * maxRepulsion;
          const angle = Math.atan2(dy, dx);
          newVelocities[i].x += Math.cos(angle) * repulsion;
          newVelocities[i].y += Math.sin(angle) * repulsion;
        }
      }

      setPositions(newPositions);
      setVelocities(newVelocities);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [positions, velocities, mousePosition, containerSize]);

  return (
    <section id="skills" className="md:py-16 py-10 md:px-32 px-4 bg-white">
      {/* Header */}
      <div className="mb-12">
        {/* Top meta row */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
            <span>{t('skills.meta')}</span>
            <span>{t('skills.metaNumber')}</span>
          </div>
          <div className="mt-2 h-px w-full bg-black"></div>
        </div>

        {/* Header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight text-black">
              {t('skills.title')}
            </h2>
          </div>
          <div ref={descriptionRef} className="lg:col-span-5">
            {words.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={slideUp}
                initial="initial"
                animate={descriptionInView ? 'animate' : 'initial'}
                className="sm:text-lg text-base text-black/60 inline-block mr-1.5"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Left: 2 lines x 2 columns category cards (white background, gray border) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category, index) => {
            const categoryKeys = ['frontend', 'backend', 'mobile', 'other'];
            const categoryTitle =
              categoryKeys[index]
                ? t(`skills.categories.${categoryKeys[index]}`, category.title)
                : category.title;

            return (
              <motion.div
                key={category.title}
                custom={index}
                variants={slideUp}
                initial="initial"
                animate={descriptionInView ? 'animate' : 'initial'}
                className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-gray-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg sm:text-xl text-black font-semibold tracking-tight">
                      {categoryTitle}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                      {categoryIcons[index]}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {category.items.map((item, i) => (
                      <Magnetic modify={0.1} key={i}>
                        <span className="inline-block bg-gray-50 text-black/80 font-medium text-xs sm:text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
                          {item}
                        </span>
                      </Magnetic>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Black Div with original glow items and untouched physics logic */}
        <div
          ref={containerRef}
          className="relative h-[420px] md:h-[560px] w-full md:col-span-5 bg-black rounded-3xl overflow-hidden flex items-center justify-center"
        >
          {/* Floating language icons physics */}
          {programmingLanguages.map((lang, index) =>
            positions[index] ? (
              <motion.div
                key={lang.name}
                className="absolute"
                style={{
                  x: positions[index].x * 10,
                  y: positions[index].y * 10,
                  scale: positions[index].scale,
                  rotate: positions[index].rotation,
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [
                      positions[index].rotation,
                      positions[index].rotation + 3,
                      positions[index].rotation,
                    ],
                  }}
                  transition={{
                    duration: 3 + (index % 2),
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  {lang.image ? (
                    <img
                      src={lang.image}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg object-contain"
                      alt={lang.name}
                      style={{
                        filter: `drop-shadow(0 0 6px ${lang.color}) drop-shadow(0 0 12px ${lang.color})`,
                      }}
                    />
                  ) : (
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm md:text-xl shadow-inner"
                      style={{
                        backgroundColor: lang.color,
                        color: lang.textColor,
                        boxShadow: `0 0 20px ${lang.color}`,
                      }}
                    >
                      {lang.symbol}
                    </div>
                  )}
                  <div className="absolute -bottom-8 text-sm text-white text-center w-full"></div>
                </motion.div>
              </motion.div>
            ) : null
          )}

          {/* Absolute Bottom Text Overlay (non-blocking pointer-events-none) */}
          <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {t('skills.poolTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-xs leading-relaxed">
              {t('skills.poolDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
