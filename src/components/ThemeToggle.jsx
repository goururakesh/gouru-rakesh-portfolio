import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="glass flex h-10 w-10 items-center justify-center rounded-full text-lg text-orange-400 transition hover:glow-orange"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? <HiSun /> : <HiMoon />}
    </motion.button>
  );
}
