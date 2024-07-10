import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import "./_animation.scss";

const AnimatedComponent = ({ animationType, children }) => {
  const elementRef = useIntersectionObserver(
    (element) => {
      element.classList.add(animationType);
    },
    (element) => {
      element.classList.remove(animationType);
    },
    { threshold: 0.2 }
  );

  return (
    <div ref={elementRef} className="animated-element">
      {children}
    </div>
  );
};

export default AnimatedComponent;
