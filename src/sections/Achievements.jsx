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
    <section id="achievements" className="relative px-4 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="Milestones" title="Achievements" />
        <motion.div
          className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: 'Hackathons', value: 3 },
            { label: 'Internships', value: 4 },
            { label: 'Projects', value: 10 },
            { label: 'Technologies', value: 20 },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="glass gradient-border rounded-2xl p-6 text-center"
              variants={fadeUp}
            >
              <p className="font-display text-3xl font-bold gradient-text md:text-4xl">
                <Counter value={stat.value} inView={inView} />
              </p>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
                className="glass gradient-border group rounded-2xl p-6 text-center transition hover:glow-orange"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-cyan-500/20 text-2xl text-orange-400 transition group-hover:scale-110">
                  <Icon />
                </span>
                <h3 className="mt-4 font-display font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-cyan-400">{item.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
