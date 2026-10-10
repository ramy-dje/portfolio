import React, { useRef, useEffect } from 'react';
import { projects } from '../utils/info';

const projectShots = projects.map((p) => ({
  name: p.name,
  src: p.images[0].replace(/[^/]+$/, '1.png'),
}));

// Infinite marquee row. Hovering eases playbackRate down instead of changing
// the duration, so the strip slows smoothly without jumping.
function MarqueeRow({ items, reverse = false, duration = 40 }) {
  const trackRef = useRef(null);
  const rateRef = useRef({ current: 1, target: 1, raf: 0 });

  const easeTo = (target) => {
    const state = rateRef.current;
    state.target = target;
    cancelAnimationFrame(state.raf);
    const step = () => {
      state.current += (state.target - state.current) * 0.1;
      if (Math.abs(state.target - state.current) < 0.005) {
        state.current = state.target;
      }
      trackRef.current?.getAnimations().forEach((a) => {
        a.playbackRate = state.current;
      });
      if (state.current !== state.target) {
        state.raf = requestAnimationFrame(step);
      }
    };
    state.raf = requestAnimationFrame(step);
  };

  useEffect(() => () => cancelAnimationFrame(rateRef.current.raf), []);

  return (
    <div
      dir="ltr"
      className="overflow-hidden"
      onMouseEnter={() => easeTo(0.3)}
      onMouseLeave={() => easeTo(1)}
    >
      <div
        ref={trackRef}
        className="flex w-max"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0 pr-4 sm:pr-6">
            <img
              src={item.src}
              alt={item.name}
              loading="lazy"
              draggable={false}
              className="h-60 sm:h-72 md:h-84 lg:h-96 w-auto rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollableProjects() {
  return (
    <div className="hidden md:flex mt-12 sm:mt-16 flex-col gap-4 sm:gap-6">
      <MarqueeRow items={projectShots} duration={50} />
      <MarqueeRow
        items={[...projectShots].reverse()}
        reverse
        duration={55}
      />
    </div>
  );
}

export default ScrollableProjects;
