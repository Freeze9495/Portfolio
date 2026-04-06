import { useEffect, useRef } from 'react';

export const useRevealAnimation = (threshold = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add reveal class for initial hidden state
    element.classList.add('reveal');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element); // Only animate once
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};
