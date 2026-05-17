import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9990] h-[3px] origin-left bg-gradient-to-r from-orange-500 via-cyan-400 to-orange-500"
      style={{ width: `${progress}%` }}
      initial={{ scaleX: 0 }}
    />
  );
}
