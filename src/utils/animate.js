const slideUp = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  animate: (i) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 0.5, delay: 0.03 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

const opacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
};

const scaleVariants = {
  hidden: {
    scale: 0.1,
    opacity: 0,
    borderRadius: '0%',
  },
  visibleTop: {
    scale: 1,
    opacity: 1,
    borderTopLeftRadius: '100%',
    borderTopRightRadius: '100%',
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
      borderTopLeftRadius: {
        duration: 1.2,
        ease: 'easeInOut',
      },
      borderTopRightRadius: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  },
  visibleBottom: {
    scale: 1,
    opacity: 1,
    borderTopLeftRadius: '0%',
    borderBottomLeftRadius: '100%',
    borderBottomRightRadius: '100%',
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
      borderBottomLeftRadius: {
        duration: 1.2,
        ease: 'easeInOut',
      },
      borderBottomRightRadius: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  },
  visibleTopLeft: {
    scale: 1,
    opacity: 1,
    borderTopRightRadius: '50%',
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
      borderTopRightRadius: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  },
  visibleBottomRight: {
    scale: 1,
    opacity: 1,
    borderBottomLeftRadius: '50%',
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
      borderBottomLeftRadius: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  },
};

export { opacity, slideUp, scaleVariants };
