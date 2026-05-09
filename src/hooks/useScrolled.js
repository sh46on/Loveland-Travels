import { useState, useEffect } from 'react';

/**
 * Returns `true` once the window has scrolled past `threshold` pixels.
 * Used to toggle the solid/frosted navbar style.
 */
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
