import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import SEO from './components/SEO';
import { useTheme } from './hooks/useTheme';

const Home = lazy(() => import('./pages/Home'));

export default function App() {
  const [loading, setLoading] = useState(true);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <SEO />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ParticleBackground />
          <ScrollProgress />
          <CustomCursor />
          <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
          <Suspense fallback={null}>
            <Home />
          </Suspense>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
