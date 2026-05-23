import { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import CssParticles from './CssParticles';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useTouchDevice } from '../hooks/useTouchDevice';

const ParticleBackgroundThree = lazy(() => import('./ParticleBackgroundThree'));

export default function ParticleBackground() {
  const isTouch = useTouchDevice();
  const reducedMotion = usePrefersReducedMotion();
  const useLightweight = isTouch || reducedMotion;

  if (useLightweight) {
    return <CssParticles count={40} />;
  }

  return (
    <ErrorBoundary fallback={<CssParticles count={48} />}>
      <Suspense fallback={<CssParticles count={32} />}>
        <ParticleBackgroundThree />
      </Suspense>
    </ErrorBoundary>
  );
}
