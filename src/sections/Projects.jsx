import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { PROJECTS } from '../constants';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-cyan-500/5" />
      <div className="relative mx-auto max-w-6xl">
        <SectionTitle subtitle="Portfolio" title="Featured Projects" />
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              className={`glass gradient-border group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br ${project.gradient}`}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-cyan-400/5 to-orange-500/0 opacity-0 transition group-hover:opacity-100"
                layoutId={`glow-${project.id}`}
              />
              <div className="relative">
                <h3 className="font-display text-xl font-bold md:text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 light-mode:text-slate-600">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-400/50 hover:text-cyan-400"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm text-white transition hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
