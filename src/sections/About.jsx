import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { ABOUT_POINTS, ABOUT_SUMMARY, EDUCATION, WHAT_I_DO } from '../constants';
import { fadeUp, staggerContainer } from '../animations/variants';
import { FaGraduationCap, FaServer, FaRobot, FaCode } from 'react-icons/fa';

const icons = [FaGraduationCap, FaServer, FaRobot, FaCode];

export default function About() {
  return (
    <section id="about" className="section-spacing relative px-4">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          subtitle="About Me"
          title="Who I Am"
          description="A quick overview of my background, strengths, and what I bring to every project."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="glass glass-premium gradient-border rounded-3xl p-6 md:p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {ABOUT_SUMMARY.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-relaxed text-white/70 md:text-base light-mode:text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <motion.ul
              className="mt-6 space-y-4 border-t border-white/10 pt-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {ABOUT_POINTS.map((point, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.li
                    key={point.title}
                    className="flex items-start gap-3"
                    variants={fadeUp}
                    custom={i}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                      <Icon />
                    </span>
                    <div>
                      <p className="font-medium text-white/90 light-mode:text-slate-800">
                        {point.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/55 light-mode:text-slate-600">
                        {point.detail}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          <motion.div
            className="glass glass-premium gradient-border rounded-3xl p-6 md:p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold gradient-text">Education</h3>
            <div className="mt-4 border-l-2 border-orange-500/40 pl-5">
              <p className="font-display text-lg font-semibold text-white light-mode:text-slate-800">
                {EDUCATION.degree}
              </p>
              <p className="mt-1 text-cyan-400">{EDUCATION.college}</p>
              <p className="mt-1 text-sm text-white/50">{EDUCATION.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/55 light-mode:text-slate-600">
                Specialized in IoT, embedded systems, and intelligent computing with strong
                foundations in programming, databases, and software engineering principles.
              </p>
            </div>

            <h3 className="mt-8 font-display text-lg font-semibold text-white/90 light-mode:text-slate-800">
              At a Glance
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: 'Current Role', value: 'CGI Apprentice' },
                { label: 'Location', value: 'Bangalore, IN' },
                { label: 'Primary Stack', value: 'Python · React' },
                { label: 'Availability', value: 'Open to Work' },
                { label: 'Domain', value: 'AI · Full Stack' },
                { label: 'Languages', value: 'EN · TE · HI' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white/5 p-3 light-mode:bg-slate-100"
                >
                  <p className="text-[10px] tracking-wider text-white/40 uppercase md:text-xs">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-orange-400">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="mb-5 text-center font-display text-xl font-semibold text-white/90 light-mode:text-slate-800">
            What I <span className="gradient-text">Do</span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_I_DO.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass glass-premium gradient-border rounded-2xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <h4 className="font-display font-semibold text-orange-400">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/55 light-mode:text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
