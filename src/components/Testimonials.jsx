import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp } from '../utils/animate';

const testimonials = [
  {
    name: 'Delimi Nadir',
    role: 'CEO of Evact',
    image: '/ceos/nadir.jpg',
    quote:
      "Rami has been a valuable contributor to our POS system. He quickly adapted to our codebase, delivered good work, and was always easy to communicate with throughout the project.",
  },
  {
    name: 'Rafik Ferhat',
    role: 'CEO of Black and Yellow',
    image: '/ceos/rafik.jpg',
    quote:
      "I'm incredibly thankful to Rami for his professional work. He is by far the most agile and skillful in Algeria. I truly appreciate working with him and look forward to future collaborations.",
  },
  {
    name: 'Sami Tebibel',
    role: 'CEO of Nexo',
    image: '/ceos/sami.jpg',
    quote:
      'Working with Ramy has been a pleasure, he is quick to find solutions and motivated, always trying to improve himself and those around him.',
  },
  {
    name: 'Reda Baka',
    role: 'CEO of BigNova',
    image: '/ceos/reda.png',
    quote:
      'Ramy Djebeli was a reliable and professional team member. He consistently delivered assigned tasks, communicated effectively, and contributed positively to the success of our projects.',
  },
];

const getInitials = (name) =>
  name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Stars = ({ dark }) => (
  <div className={`flex items-center gap-1 my-3 ${dark ? 'text-white' : 'text-black'}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = ({ dark }) => (
  <svg
    className={`w-6 h-6 opacity-90 ${dark ? 'text-white' : 'text-black'}`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

function Testimonials() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="testimonials"
      className="bg-white px-4 sm:px-8 lg:px-12 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          {/* Top meta row */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
              <span>PROOF</span>
              <span>(04)</span>
            </div>
            <div className="mt-2 h-px w-full bg-black"></div>
          </div>

          {/* Header layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight text-black">
                What Clients Say.
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="sm:text-lg text-black/60 max-w-3xl">
                What clients say about working with me. Real feedback from real
                partnerships that drive exceptional results.
              </p>
            </div>
          </div>
        </div>

        {/* Cards container - 1 row on large screens */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden shadow-md ring-1 ring-black/10"
        >
          {testimonials.map((testimonial, index) => {
            const isDark = index % 2 === 0;

            return (
              <motion.div
                key={testimonial.name}
                custom={index}
                variants={slideUp}
                initial="initial"
                animate={inView ? 'animate' : 'initial'}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`relative flex flex-col justify-between p-6 sm:p-8 ${isDark ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
              >
                {isDark ? (
                  /* Dark Card: Quote Icon top, Name/Avatar bottom */
                  <>
                    <div className="flex-1 flex flex-col justify-start">
                      <QuoteIcon dark={isDark} />
                      <Stars dark={isDark} />
                      <p className="text-sm sm:text-base leading-relaxed text-white/90 mt-2 mb-6">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-white/60 mt-0.5 font-normal">
                          {testimonial.role}
                        </div>
                      </div>
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-white/20"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white font-semibold text-xs shrink-0 ring-1 ring-white/20">
                          {getInitials(testimonial.name)}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  /* Light Card: Avatar + Name top, Quote text below */
                  <>
                    <div className="flex-1 flex flex-col justify-start">
                      <div className="flex items-center gap-3 mb-2">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-black/10"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white font-semibold text-xs shrink-0">
                            {getInitials(testimonial.name)}
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-bold text-black leading-tight">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-black/60 font-normal">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <Stars dark={isDark} />
                      <p className="text-sm sm:text-base leading-relaxed text-black/80 mt-2 mb-4">
                        {testimonial.quote}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
