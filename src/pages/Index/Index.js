import React, { useEffect } from "react";
import "./Index.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Project from "../../components/ProjectCard/Project";
import { data } from "./_data";
import webDesignImg from "../../images/pics/img_webdesign_m.png";
import webDevImg from "../../images/pics/img_webdevelop_m.png";
import graphicImg from "../../images/pics/img_graphicdesign_m.png";
import creativeImg from "../../images/pics/create002_m.png";
import SlideShow from "../../components/SlideShow/SlideShow";
import AnimatedComponent from "../../components/Animation/AnimatedComponent";
const Index = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { targetId } = state || {};

  const handleAbout = () => {
    navigate("/about");
  };

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = -50;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, 100);

  return (
    <div className="index">
      <Header />
      {/* hero area */}
      <div className="hero">
        <div className="hero_container">
          <h1>
            Creating digital products that blend design sensibility with taste
            and seamless user experiences and robust technical performance.
          </h1>
          <div className="heroBox">
            <p className="title">Haruka ISHIKAWA</p>
            <p className="description">
              Web Designer
              <br />
              UX/UI Designer
            </p>
          </div>
        </div>
        <SlideShow />
      </div>

      <main>
        {/* My service */}
        <div className="myService">
          <p className="section">MY SERVICE</p>
          <AnimatedComponent animationType="fadeUp">
            <div className="myServiceBox">
              <img className="changeColor" src={webDesignImg} />
              <div className="serviceDescription">
                <p className="title">Web Design</p>
                <p className="description">
                  We provide digital products that emphasize UX/UI, combining
                  both design and functionality.
                </p>
              </div>
            </div>
          </AnimatedComponent>
          <AnimatedComponent animationType="fadeUp">
            <div className="myServiceBox">
              <img className="changeColor" src={webDevImg} />
              <div className="serviceDescription">
                <p className="title">
                  Web Development <br /> Front-End
                </p>
                <p className="description">
                  With knowledge in front-end development, I can create web
                  applications. By combining design and coding skills, I can
                  efficiently and swiftly produce products without any waste.
                </p>
              </div>
            </div>
          </AnimatedComponent>
          <AnimatedComponent animationType="fadeUp">
            <div className="myServiceBox">
              <img className="changeColor" src={graphicImg} />
              <div className="serviceDescription">
                <p className="title">Graphic Design</p>
                <p className="description">
                  We create designs that are simple yet fun and playful,
                  ensuring they are user-friendly and approachable for everyone.
                </p>
              </div>
            </div>
          </AnimatedComponent>
        </div>
        {/* projects */}
        <p className="section" id="project">
          PROJECTS
        </p>
        <div className="projects">
          {data.map((project, i) => (
            <Project project={project} />
          ))}
        </div>
        {/* contact me */}
        <AnimatedComponent animationType="slideIn">
          <div className="contactMe">
            <img className="changeColor" src={creativeImg} />
            <div className="contactMe_container">
              <p className="subTitle">HELLO</p>
              <p className="title">
                FROM IDEA <br />
                TO PRODUCT
              </p>
              <p className="description">
                Passionate Web Designer seeking new opportunities to create
                engaging user experiences and bring designs to life. If you have
                any request or question about work, please feel free to contact
                me!
              </p>
              <Button text="Contact Me" onClick={handleAbout} />
            </div>
          </div>
        </AnimatedComponent>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

{
  /* <Button
  text="test"
  onClick={() => {
    navigate("/test");
  }}
/>  */
}
