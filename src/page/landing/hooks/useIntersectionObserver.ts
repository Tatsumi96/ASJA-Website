import { useEffect, useRef } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

export const useIntersectionObserver = (
  callback: () => void,
  options: UseIntersectionObserverOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = '0px', enabled = true } = options;

  useEffect(() => {
    if (!ref.current || !enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [callback, threshold, rootMargin, enabled]);

  return ref;
};
