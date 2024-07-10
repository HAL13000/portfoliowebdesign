import { useEffect, useRef } from "react";

const useIntersectionObserver = (
  intersectingCallback,
  outsideCallback,
  options
) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingCallback(entry.target);
          //   observer.unobserve(entry.target);
        } else {
          outsideCallback(entry.target);
        }
      });
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [intersectingCallback, outsideCallback, options]);

  return elementRef;
};

export default useIntersectionObserver;
