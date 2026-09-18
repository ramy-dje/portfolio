import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { theRed } from '../../utils/colors';

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const cardMotion = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const Card = ({ step, alignRight }) => (
  <div className="bg-white border border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-md hover:border-gray-300 text-start">
    {step.location && (
      <div
        className={`flex mb-6 items-center ${
          alignRight ? 'lg:justify-end' : ''
        }`}
      >
        <span className="text-xs font-medium bg-gray-100 text-black/70 px-3 py-1 rounded-full border border-gray-200">
          {step.location}
        </span>
      </div>
    )}
    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-black">
      {step.title}
    </h3>
    {Array.isArray(step.bullets) ? (
      <ul className="text-sm md:text-base leading-relaxed text-black/70 mb-6 space-y-2.5 text-start">
        {step.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="text-black/40 font-bold mt-0.5 shrink-0">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-base leading-relaxed text-black/60 mb-6">{step.description}</p>
    )}
    <div
      className={`flex items-center gap-2 text-sm text-black/50 ${
        alignRight ? 'lg:justify-end' : ''
      }`}
    >
      <ClockIcon />
      <span>{step.period}</span>
    </div>
  </div>
);

const Dot = () => (
  <motion.div
    initial={{ scale: 0.6, opacity: 0.4 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    style={{ backgroundColor: theRed }}
    className="w-6 h-6 z-10 flex-shrink-0 rounded-full ring-4 ring-white shadow-lg hidden lg:block"
  />
);

export const Timeline = ({ data }) => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 80%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      className="bg-white px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header (matches Testimonials) */}
        <div className="mb-16">
          {/* Top meta row */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
              <span>{t('timeline.meta')}</span>
              <span>{t('timeline.metaNumber')}</span>
            </div>
            <div className="mt-2 h-px w-full bg-black"></div>
          </div>

          {/* Header layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight text-black">
                {t('timeline.title')}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="sm:text-lg text-black/60 max-w-3xl">
                {t('timeline.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Center progress line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-black/10 rounded-full overflow-hidden hidden lg:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-black rounded-full"
            />
          </div>

          <div className="space-y-16 lg:space-y-20">
            {data.map((item, index) => {
              const step = { ...item, number: index + 1 };
              const cardOnLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
                >
                  {cardOnLeft ? (
                    <>
                      <div className="flex-1 lg:text-right lg:pr-12 w-full">
                        <motion.div {...cardMotion}>
                          <Card step={step} alignRight />
                        </motion.div>
                      </div>
                      <Dot />
                      <div className="flex-1 lg:pl-12 hidden lg:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 lg:pr-12 hidden lg:block"></div>
                      <Dot />
                      <div className="flex-1 lg:pl-12 w-full">
                        <motion.div {...cardMotion}>
                          <Card step={step} />
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
