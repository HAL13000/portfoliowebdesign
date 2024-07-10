import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import "./animation.scss";

const AnimatedComponent = ({ children }) => {
  const elementRef = useIntersectionObserver((element) => {
    element.classList.add("animate");
  });

  return (
    <div ref={elementRef} className="animated-element">
      {children}
    </div>
  );
};

export default AnimatedComponent;
