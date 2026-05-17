import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { ABOUT_POINTS, EDUCATION } from '../constants';
import { fadeUp, staggerContainer } from '../animations/variants';
import { FaGraduationCap, FaServer, FaRobot, FaCode } from 'react-icons/fa';

const icons = [FaGraduationCap, FaServer, FaRobot, FaCode];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="About Me" title="Who I Am" />
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="glass gradient-border rounded-3xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-white/70 light-mode:text-slate-600">
              I&apos;m a passionate technologist bridging{' '}
              <span className="text-orange-400">AI innovation</span>,{' '}
              <span className="text-cyan-400">full-stack development</span>, and{' '}
              <span className="text-orange-400">enterprise mainframe operations</span>.
              I build intelligent, scalable solutions that create real-world impact.
            </p>
            <motion.ul
              className="mt-8 space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {ABOUT_POINTS.map((point, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.li
                    key={point}
                    className="flex items-start gap-4"
                    variants={fadeUp}
                    custom={i}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                      <Icon />
                    </span>
                    <span className="text-white/80 light-mode:text-slate-700">{point}</span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          <motion.div
            className="glass gradient-border rounded-3xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold gradient-text">Education</h3>
            <motion.div
              className="mt-6 border-l-2 border-orange-500/40 pl-6"
              whileHover={{ x: 4 }}
            >
              <p className="font-display text-lg font-semibold text-white light-mode:text-slate-800">
                {EDUCATION.degree}
              </p>
              <p className="mt-2 text-cyan-400">{EDUCATION.college}</p>
              <p className="mt-1 text-sm text-white/50">{EDUCATION.period}</p>
            </motion.div>
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: 'Focus', value: 'AI & IoT' },
                { label: 'Stack', value: 'MERN + Python' },
                { label: 'Role', value: 'Apprentice @ CGI' },
                { label: 'Passion', value: 'Prompt Engineering' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="rounded-xl bg-white/5 p-4 text-center light-mode:bg-slate-100"
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-xs tracking-wider text-white/40 uppercase">{item.label}</p>
                  <p className="mt-1 font-medium text-orange-400">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
