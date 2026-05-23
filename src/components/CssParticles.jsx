import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function CssParticles({ count = 48 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 4,
        color: i % 2 === 0 ? 'rgba(0, 212, 255, 0.5)' : 'rgba(255, 107, 53, 0.4)',
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          animate={{
            y: [0, -20 - Math.random() * 30, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
