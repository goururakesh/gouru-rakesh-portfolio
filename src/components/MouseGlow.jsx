import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useMousePosition } from '../hooks/useMousePosition';

export default function MouseGlow() {
  const { x, y } = useMousePosition();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[1] h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]"
      aria-hidden="true"
      animate={{ x: x - 128, y: y - 128 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    />
  );
}
