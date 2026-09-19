import { useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to add the 'revealed' class
 * to elements with the 'reveal' class when they scroll into view.
 */
export function useScrollReveal(threshold = 0.15) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const revealElements = node.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold]);

  return sectionRef;
}
