'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const theGray = '#ADA8A8';
const theRed = '#C62828';
const theBlack = '#2A2A2A';
const theWhite = '#fff';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="experience"
      ref={containerRef}
      className="w-full font-sans text-black md:py-16 py-10 md:px-32 px-4 overflow-hidden"
      style={{ backgroundColor: theBlack, color: theWhite }}
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">My Journey</h2>
        <p className="text-md md:text-lg text-gray-100 max-w-lg">
          A look back at my professional milestones and the experiences that
          shaped my career.
        </p>
      </div>

      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex md:gap-12 gap-6 items-start relative z-10 pb-24"
          >
            {/* Dot & title */}
            <div className="flex flex-col items-center">
              <div
                className="w-6 h-6 rounded-full border-2"
                style={{ borderColor: theRed, backgroundColor: theWhite }}
              >
                <div
                  className="w-2 h-2 rounded-full m-auto mt-[6px]"
                  style={{ backgroundColor: theRed }}
                ></div>
              </div>
              <div className="hidden md:block h-full w-[2px] bg-gray-100 mt-0"></div>
            </div>

            <div>
              <h3 className="text-xl font-semibold  mb-2">{item.title}</h3>
              <div className="text-gray-100 leading-relaxed text-sm md:text-base">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Animated vertical line */}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
            backgroundColor: theRed,
          }}
          className="absolute left-[11px] top-0 w-[2px] z-0"
        />
      </div>
    </div>
  );
};
