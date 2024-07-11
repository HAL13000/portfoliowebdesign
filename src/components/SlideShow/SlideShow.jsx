import React, { useEffect, useState } from "react";
import "./SlideShow.scss";
import image1 from "../../images/pics/img001_l.jpeg";
import image2 from "../../images/pics/img002_l.jpeg";
import image3 from "../../images/pics/img003_l.jpeg";
import image6 from "../../images/pics/img006_l.jpeg";

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideData = [
    { url: image1, caption: "Slide 1" },
    { url: image2, caption: "Slide 2" },
    { url: image3, caption: "Slide 3" },
    { url: image6, caption: "Slide 6" },
    // ... more slides
  ];

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slideData.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);
  // console.log(slideData.url);

  return (
    <div className="SlideShow">
      <div className="slideshow-container">
        {slideData.map((slideData, index) => (
          <img
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slideData.url})` }}
            src={slideData.url}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
