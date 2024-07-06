import React from "react";
import "./Index.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Project from "../../components/ProjectCard/Project";
import { data } from "./_data";
import webDesignImg from "../../images/pics/img_webdesign_m.png";
import webDevImg from "../../images/pics/img_webdevelop_m.png";
import graphicImg from "../../images/pics/img_graphicdesign_m.png";
import creativeImg from "../../images/pics/create002_m.png";

const Index = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <div className="index">
      <Header />
      {/* hero area */}
      <div className="hero">
        <div className="hero_container">
          <h1>
            Transforme an idea into a product.
            <br /> As a web designer with skills in UX/UI design, Graphic
            Design, and Web development, I create engaging digital experiences.
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

        {/* <img /> */}
      </div>
      <main>
        {/* My service */}
        <div className="myService">
          <p className="section">MY SERVICE</p>
          <div className="myServiceBox">
            <img src={webDesignImg} />
            <div className="serviceDescription">
              <p className="title">Web Design</p>
              <p className="description">
                Web design is essential as it creates the first impression of
                your site, ensuring it is visually appealing and user-friendly,
                which builds credibility and encourages user engagement.
              </p>
            </div>
          </div>
          <div className="myServiceBox">
            <img src={webDevImg} />
            <div className="serviceDescription">
              <p className="title">
                Web Development <br /> Front-End
              </p>
              <p className="description">
                Front-end web development is crucial for ensuring that your
                website is responsive, interactive, and visually aligned with
                your brand. It optimizes the user experience by making the site
                easy to navigate and fast-loading.
              </p>
            </div>
          </div>
          <div className="myServiceBox">
            <img src={graphicImg} />
            <div className="serviceDescription">
              <p className="title">Graphic Design</p>
              <p className="description">
                Graphic design visually communicates your brand's message,
                enhancing the appeal of marketing materials and conveying
                professionalism, making your brand memorable and attractive in a
                competitive market.
              </p>
            </div>
          </div>
        </div>
        {/* projects */}
        <p className="section">PROJECTS</p>
        <div className="projects">
          {data.map((project, i) => (
            <Project project={project} />
          ))}
        </div>
        {/* contact me */}
        <div className="contactMe">
          <img src={creativeImg} />
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;

{
  /* <div className="box_try">
  <div className="try1">
    Main Color
    <br />
    light : Black dark : White
  </div>
  <div className="try2">
    Background Color
    <br />
    light : Ivory dark : Brown
  </div>
</div> */
}
