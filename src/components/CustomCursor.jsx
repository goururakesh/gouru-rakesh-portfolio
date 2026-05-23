import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useMousePosition } from '../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const hasFinePointer = useMediaQuery('(pointer: fine)');

  if (isMobile || !hasFinePointer) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 mix-blend-difference"
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500"
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.2 }}
      />
    </>
  );
}
