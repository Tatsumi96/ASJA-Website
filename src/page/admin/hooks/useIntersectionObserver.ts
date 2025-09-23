import { useRef, useEffect } from "react";

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
  const { threshold = 0.1, rootMargin = "200px", enabled = true } = options;

  useEffect(() => {
    if (!ref.current || !enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
          console.log('appel')
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, threshold, rootMargin, enabled]);

  return ref;
};
