import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function SectionTitle({ subtitle, title, description }) {
  return (
    <motion.div
      className="mb-8 text-center md:mb-10"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <span className="font-display text-sm font-medium tracking-[0.25em] text-cyan-400 uppercase">
        {subtitle}
      </span>
      <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base light-mode:text-slate-600">
          {description}
        </p>
      )}
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-cyan-400" />
    </motion.div>
  );
}
