export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const glowOnHover = {
  whileHover: {
    boxShadow: '0 0 30px #B7FF8F',
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 20px #B7FF8F',
      '0 0 40px #B7FF8F',
      '0 0 20px #B7FF8F'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};