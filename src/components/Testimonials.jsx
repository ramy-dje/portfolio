import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { slideUp } from '../utils/animate';

const defaultTestimonials = [
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
      "What I loved most about working with Rami is his energy and intelligence, especially his quick problem-solving skills. He always gives 100% and does his best every time. If I ever get another chance to work with him, I would do it again without hesitation.",
  },
  {
    name: 'Sami Tebibel',
    role: 'CEO of Nexo',
    image: '/ceos/sami.jpg',
    quote:
      "During our collaboration at Nexo Pizza, Rami showed real commitment, solid coding skills, and a deep understanding of stock management software and SaaS. Proactive and attentive to user experience, he took initiative rather than waiting for direction. He'd be an asset to any product team.",
  },
  {
    name: 'Reda Baka',
    role: 'CEO of BigNova',
    image: '/ceos/reda.png',
    quote:
      "Travailler avec Rami chez BIGNOVA a été un réel plaisir. Rigoureux, fiable et toujours à l'écoute, il transforme chaque retour en améliorations concrètes. Au-delà de ses compétences techniques, il apporte une vraie dynamique positive et collaborative à l'équipe.",
  },
];

const testimonialImages = [
  '/ceos/nadir.jpg',
  '/ceos/rafik.jpg',
  '/ceos/sami.jpg',
  '/ceos/reda.png',
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
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.15 });

  const localizedItems = t('testimonials.items', { returnObjects: true });
  const items = Array.isArray(localizedItems) && localizedItems.length > 0
    ? localizedItems.map((item, idx) => ({
        ...item,
        image: testimonialImages[idx] || item.image,
      }))
    : defaultTestimonials;

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
              <span>{t('testimonials.meta')}</span>
              <span>{t('testimonials.metaNumber')}</span>
            </div>
            <div className="mt-2 h-px w-full bg-black"></div>
          </div>

          {/* Header layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight text-black">
                {t('testimonials.title')}
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="sm:text-lg text-black/60 max-w-3xl">
                {t('testimonials.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Cards container - 1 row on large screens */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden shadow-md ring-1 ring-black/10 text-start"
        >
          {items.map((testimonial, index) => {
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
