import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const fallback = setTimeout(onComplete, 2800);
    return () => clearTimeout(fallback);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <motion.div
        className="relative flex h-24 w-24 items-center justify-center"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-orange-500/30"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 2, repeat: Infinity, ease: 'linear' }, scale: { duration: 2, repeat: Infinity } }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-cyan-400/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <span className="font-display text-3xl font-bold gradient-text">GR</span>
      </motion.div>
      <motion.p
        className="mt-8 font-display text-sm tracking-[0.3em] text-white/50 uppercase"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Loading Experience
      </motion.p>
      <motion.div
        className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <motion.div
          className="loader-bar h-full rounded-full bg-gradient-to-r from-orange-500 via-cyan-400 to-orange-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => setTimeout(onComplete, 400)}
        />
      </motion.div>
    </motion.div>
  );
}
