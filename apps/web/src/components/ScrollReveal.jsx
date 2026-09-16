import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const prefersReducedMotion = useReducedMotion();
  const offset = direction === 'left' ? { x: -24 } : direction === 'right' ? { x: 24 } : { y: 24 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
