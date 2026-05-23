import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { EXPERIENCE } from '../constants';
import { fadeUp } from '../animations/variants';

export default function Experience() {
  return (
    <section id="experience" className="section-spacing relative px-4">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          subtitle="Career"
          title="Work Experience"
          description="Professional experience blending enterprise mainframe operations with modern software development."
        />
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-orange-500 via-cyan-400 to-transparent md:left-1/2 md:-translate-x-px" />
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative mb-8 pl-16 md:pl-0 md:even:pl-[calc(50%+2rem)] md:odd:pr-[calc(50%+2rem)] md:odd:text-right"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <motion.div
                className="absolute left-4 h-4 w-4 rounded-full border-2 border-orange-500 bg-[#050508] shadow-lg shadow-orange-500/50 md:left-1/2 md:-translate-x-1/2"
                whileHover={{ scale: 1.3 }}
              />
              <div className="glass glass-premium gradient-border rounded-2xl p-6 md:p-7">
                <span className="text-sm font-medium text-cyan-400">{exp.period}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{exp.role}</h3>
                <p className="text-orange-400">
                  {exp.company} · {exp.location}
                </p>
                {exp.summary && (
                  <p className="mt-3 text-sm leading-relaxed text-white/55 md:odd:ml-auto md:odd:max-w-md light-mode:text-slate-600">
                    {exp.summary}
                  </p>
                )}
                <ul className="mt-4 space-y-2 md:odd:ml-auto md:odd:max-w-md">
                  {exp.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-left text-sm text-white/60 md:odd:text-right light-mode:text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400 md:odd:order-2 md:odd:mt-2" />
                      <span className="md:odd:order-1">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
