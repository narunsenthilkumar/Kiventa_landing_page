import { useEffect } from 'react';

/**
 * Hook to automatically reveal elements on scroll using IntersectionObserver.
 * Targets all elements with className '.reveal-hidden'.
 */
export const useScrollReveal = (deps: unknown[] = []) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const elements = document.querySelectorAll('.reveal-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, deps);
};
