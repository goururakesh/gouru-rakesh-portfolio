import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaTrophy, FaCertificate, FaChartLine, FaCode } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { ACHIEVEMENTS } from '../constants';
import { fadeUp, staggerContainer } from '../animations/variants';

const iconMap = {
  trophy: FaTrophy,
  certificate: FaCertificate,
  chart: FaChartLine,
  code: FaCode,
};

function Counter({ value, inView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [count, value, inView]);

  useEffect(() => {
    const unsub = rounded.on('change', setDisplay);
    return unsub;
  }, [rounded]);

  return <span>{display}+</span>;
}

export default function Achievements() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="section-spacing relative px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          subtitle="Milestones"
          title="Achievements"
          description="Hackathons, internships, and programs that shaped my problem-solving and industry readiness."
        />
        <motion.div
          className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: 'Hackathons Won', value: 1 },
            { label: 'Internships', value: 4 },
            { label: 'Projects Built', value: 10 },
            { label: 'Technologies', value: 20 },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="glass glass-premium gradient-border rounded-2xl p-4 text-center md:p-5"
              variants={fadeUp}
            >
              <p className="font-display text-2xl font-bold gradient-text md:text-3xl">
                <Counter value={stat.value} inView={inView} />
              </p>
              <p className="mt-1 text-xs text-white/50 md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = iconMap[item.icon] || FaTrophy;
            return (
              <motion.div
                key={item.title}
                className="glass glass-premium gradient-border group rounded-2xl p-5 text-left transition hover:glow-orange"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-cyan-500/20 text-xl text-orange-400">
                  <Icon />
                </span>
                <h3 className="mt-3 font-display font-semibold">{item.title}</h3>
                <p className="text-sm text-cyan-400">{item.subtitle}</p>
                {item.description && (
                  <p className="mt-2 text-xs leading-relaxed text-white/50 light-mode:text-slate-600">
                    {item.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
