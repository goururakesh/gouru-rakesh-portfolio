import { motion } from 'framer-motion';
import {
  FaPython,
  FaJava,
  FaJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaTools,
  FaBrain,
  FaCode,
  FaChartBar,
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiPostman, SiArduino } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';
import { SKILLS, SKILL_CATEGORY_INFO } from '../constants';
import { fadeUp, staggerContainer } from '../animations/variants';

const iconMap = {
  Python: FaPython,
  Java: FaJava,
  JavaScript: FaJs,
  SQL: FaDatabase,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  'React.js': FaReact,
  Bootstrap: FaBootstrap,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  GitHub: FaGithub,
  Postman: SiPostman,
  'Power BI': FaChartBar,
  Arduino: SiArduino,
  'REST APIs': FaTools,
  'Prompt Engineering': FaBrain,
  'Generative AI': FaBrain,
};

const categoryIcons = {
  Programming: FaCode,
  Frontend: FaReact,
  Backend: FaNodeJs,
  Databases: FaDatabase,
  Tools: FaTools,
  AI: FaBrain,
};

export default function Skills() {
  return (
    <section id="skills" className="section-spacing relative px-4">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          subtitle="Expertise"
          title="Skills & Technologies"
          description="Technologies I use daily across AI development, web engineering, databases, and enterprise tooling."
        />
        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {Object.entries(SKILLS).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              className="glass gradient-border group rounded-2xl p-6 transition hover:glow-blue"
              variants={fadeUp}
              custom={catIndex}
              whileHover={{ y: -6 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-cyan-500/20 text-orange-400">
                  {(() => {
                    const CatIcon = categoryIcons[category] || FaCode;
                    return <CatIcon />;
                  })()}
                </span>
                <h3 className="font-display text-lg font-semibold">{category}</h3>
              </div>
              {SKILL_CATEGORY_INFO[category] && (
                <p className="mb-3 text-xs leading-relaxed text-white/45 light-mode:text-slate-500">
                  {SKILL_CATEGORY_INFO[category]}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => {
                  const Icon = iconMap[skill] || FaCode;
                  return (
                    <motion.span
                      key={skill}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition group-hover:border-cyan-400/30 light-mode:border-slate-200 light-mode:bg-slate-50"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(255,107,53,0.5)' }}
                    >
                      <Icon className="text-orange-400" />
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
