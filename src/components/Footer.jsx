import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { NAV_LINKS, PERSONAL } from '../constants';
import { scrollToSection } from '../utils/scrollTo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <motion.div
        className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-display text-2xl font-bold gradient-text">GR</span>
            <p className="mt-3 max-w-xs text-sm text-white/50 light-mode:text-slate-600">
              {PERSONAL.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white/90 light-mode:text-slate-800">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-wrap gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/50 transition hover:text-orange-400 light-mode:text-slate-600"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white/90 light-mode:text-slate-800">
              Connect
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white/50 transition hover:text-cyan-400"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white/50 transition hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="text-xl text-white/50 transition hover:text-orange-400"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-white/40 light-mode:text-slate-500">
          © {year} {PERSONAL.name}. Crafted with React & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
