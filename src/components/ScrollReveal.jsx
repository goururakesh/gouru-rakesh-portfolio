import { motion } from 'framer-motion';
import { smoothReveal } from '../animations/variants';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={smoothReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
