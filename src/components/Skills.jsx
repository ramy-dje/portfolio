import React, { useRef, useState, useEffect } from 'react';
import { theBlack } from '../utils/colors';
import { motion, useInView } from 'framer-motion';
import { slideUp } from '../utils/animate';
import Magnetic from '../utils/Magnetic';
import { programmingLanguages, categories } from '../utils/info';

function Skills() {
  const descriptionRef = useRef(null);
  const containerRef = useRef(null);
  const frameRef = useRef(0);

  const descriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.3,
  });

  const description =
    'I build high-quality digital solutions using a modern and efficient tech stack.';
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

      const maxX = containerSize.width / 2 - 48;
      const maxY = containerSize.height / 2 - 48;
      const newPositions = [...positions];
      const newVelocities = [...velocities];
      const bubbleRadius = 24;
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
    <section
      id="skills"
      className="p-4 flex md:flex-row flex-col"
      style={{ backgroundColor: theBlack }}
    >
      {/* Left: Language Bubbles */}
      <div
        ref={containerRef}
        className="relative h-screen w-full md:w-1/2 bg-transparent overflow-hidden flex items-center justify-center"
      >
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
                    className="w-16 h-16 rounded-lg"
                    alt={lang.name}
                    style={{
                      filter: `drop-shadow(0 0 8px ${lang.color}) drop-shadow(0 0 16px ${lang.color})`,
                    }}
                  />
                ) : (
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-inner"
                    style={{
                      backgroundColor: lang.color,
                      color: lang.textColor,
                      boxShadow: `0 0 30px ${lang.color}`,
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
      </div>

      {/* Right: Text Content */}
      <div className="lg:p-12 md:p-8 p-4 w-full md:w-1/2">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Skills & Technologies
        </h2>

        {/* Animated Intro Text */}
        <div ref={descriptionRef} className="mb-10">
          {words.map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={slideUp}
              initial="initial"
              animate={descriptionInView ? 'animate' : 'initial'}
              className="md:text-xl text-base text-white inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Categories List */}
        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index}>
              <motion.h3
                custom={index}
                variants={slideUp}
                initial="initial"
                animate={descriptionInView ? 'animate' : 'initial'}
                className="text-xl md:text-2xl text-white font-semibold mb-2"
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <Magnetic modify={0.1} key={i}>
                    <motion.span
                      custom={i}
                      variants={slideUp}
                      initial="initial"
                      animate={descriptionInView ? 'animate' : 'initial'}
                      className="bg-white/10 text-white text-sm md:text-base px-3 py-1 rounded-full"
                    >
                      {item}
                    </motion.span>
                  </Magnetic>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
