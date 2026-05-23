import { useEffect, useState } from 'react';

export function useTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const check = () => {
      const touch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouch(touch);
      document.body.classList.toggle('is-touch', touch);
      document.body.classList.toggle('custom-cursor-active', !touch && window.innerWidth > 768);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isTouch;
}
