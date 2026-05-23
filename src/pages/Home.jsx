import { lazy, Suspense } from 'react';
import About from '../sections/About';
import Hero from '../sections/Hero';

const Skills = lazy(() => import('../sections/Skills'));
const Projects = lazy(() => import('../sections/Projects'));
const Experience = lazy(() => import('../sections/Experience'));
const Achievements = lazy(() => import('../sections/Achievements'));
const Contact = lazy(() => import('../sections/Contact'));

function SectionFallback() {
  return <div className="min-h-[80px]" />;
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </Suspense>
    </main>
  );
}
