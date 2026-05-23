import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import SEO from './components/SEO';
import { useTheme } from './hooks/useTheme';
import { useTouchDevice } from './hooks/useTouchDevice';

const Home = lazy(() => import('./pages/Home'));

function AppShell() {
  const { isDark, toggleTheme } = useTheme();
  useTouchDevice();

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <ParticleBackground />
      <MouseGlow />
      <ScrollProgress />
      <CustomCursor />
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center" role="status">
            <span className="gradient-text font-display text-lg">Loading…</span>
          </div>
        }
      >
        <Home />
      </Suspense>
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ErrorBoundary
      fallback={
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#050508] px-4 text-center">
          <p className="gradient-text font-display text-2xl font-bold">Gouru Rakesh</p>
          <p className="text-white/60">Something went wrong. Please refresh the page.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-xl bg-orange-500 px-6 py-2 text-white"
          >
            Reload
          </button>
        </div>
      }
    >
      <SEO />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <AppShell />
        </motion.div>
      )}
    </ErrorBoundary>
  );
}
