import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NAV_LINKS } from '../constants';
import { scrollToSection } from '../utils/scrollTo';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.id);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-4 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 transition-all duration-500 ${
        scrolled ? 'top-3' : 'top-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <nav
        className={`glass gradient-border flex items-center justify-between rounded-2xl px-4 py-3 md:px-6 ${
          scrolled ? 'shadow-lg shadow-black/30' : ''
        }`}
      >
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="font-display text-xl font-bold gradient-text"
        >
          GR
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active === link.id
                    ? 'bg-orange-500/15 text-orange-400'
                    : 'text-white/70 hover:text-white light-mode:text-slate-600 light-mode:hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="glass absolute top-full right-0 left-0 mt-2 rounded-2xl p-4 lg:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleNav(link.id)}
                      className="w-full rounded-lg px-4 py-3 text-left text-sm hover:bg-white/5"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
