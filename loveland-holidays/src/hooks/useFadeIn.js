import { useEffect } from 'react';

/**
 * Registers an IntersectionObserver that adds the `visible` class to every
 * element matching `.fade-section` once it enters the viewport.
 *
 * Works alongside the `.fade-section` / `.fade-section.visible` CSS defined
 * in src/index.css.
 */
export function useFadeIn(threshold = 0.12) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe all matching elements present at mount time
    const observe = () => {
      document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el));
    };

    observe();

    // Also re-observe if new elements are added dynamically
    const mutation = new MutationObserver(observe);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, [threshold]);
}
