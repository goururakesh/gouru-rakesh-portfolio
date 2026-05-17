import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => {}}
    >
      <motion.div
        className="relative flex h-24 w-24 items-center justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setTimeout(onComplete, 1800)}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            borderImage: 'linear-gradient(135deg, #ff6b35, #00d4ff) 1',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-1 rounded-full border-2 border-dashed border-orange-500/40" />
        <span className="font-display text-3xl font-bold gradient-text">GR</span>
      </motion.div>
      <motion.p
        className="mt-8 font-display text-sm tracking-[0.3em] text-white/50 uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Loading Experience
      </motion.p>
      <motion.div
        className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-cyan-400"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
