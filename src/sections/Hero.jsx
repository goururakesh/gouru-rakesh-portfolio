import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import profileImg from '../assets/profile.png';
import Button from '../components/Button';
import { HERO_STATS, PERSONAL, TYPING_ROLES } from '../constants';
import { fadeUp, floatAnimation, slideFromLeft, slideFromRight } from '../animations/variants';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { scrollToSection } from '../utils/scrollTo';

export default function Hero() {
  const typedRole = useTypingEffect(TYPING_ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center px-4 pt-24 pb-12 md:pt-28 md:pb-14"
    >
      <motion.div
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div variants={slideFromLeft} initial="hidden" animate="visible">
            <motion.p
              className="font-display text-sm tracking-widest text-cyan-400 uppercase"
              variants={fadeUp}
              custom={0}
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1
              className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              variants={fadeUp}
              custom={1}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">{PERSONAL.name}</span>
            </motion.h1>
            <motion.div className="mt-3 h-8 md:h-10" variants={fadeUp} custom={2}>
              <span className="text-xl text-white/80 md:text-2xl light-mode:text-slate-700">
                I&apos;m a{' '}
                <span className="font-semibold text-orange-400">
                  {typedRole}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </motion.div>
            <motion.p
              className="mt-4 max-w-xl text-base leading-relaxed text-white/60 md:text-lg light-mode:text-slate-600"
              variants={fadeUp}
              custom={3}
            >
              {PERSONAL.tagline}
            </motion.p>
            <motion.p
              className="mt-3 max-w-xl text-sm leading-relaxed text-white/50 md:text-base light-mode:text-slate-500"
              variants={fadeUp}
              custom={3}
            >
              B.Tech CSE (IoT) graduate · CGI Mainframe Apprentice · Builder of AI chatbots,
              full-stack apps & automation tools. Based in India, open to remote & on-site roles.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              variants={fadeUp}
              custom={4}
            >
              <Button href={PERSONAL.resumeUrl} variant="primary">
                <HiDownload className="text-lg" />
                Download Resume
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection('projects')}>
                View Projects
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative" variants={floatAnimation} animate="animate">
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-500 via-cyan-400 to-orange-500 opacity-70 blur-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <div className="gradient-border hero-glow-ring relative rounded-full p-1">
                <div className="relative h-52 w-52 overflow-hidden rounded-full bg-[#0a0a12] sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80">
                  <img
                    src={profileImg}
                    alt={PERSONAL.name}
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass glass-premium rounded-xl px-4 py-3 text-center"
            >
              <p className="font-display text-2xl font-bold gradient-text md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/50 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 transition hover:text-orange-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <HiArrowDown size={28} />
      </motion.button>
    </section>
  );
}
