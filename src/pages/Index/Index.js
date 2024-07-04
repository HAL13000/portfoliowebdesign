import React from "react";
import "./Index.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <div className="index">
      <Header />
      <main>
        <hero>
          <div className="hello">
            <h1>
              Transforme ideas into reality.
              <br /> As a web designer with skills in UX/UI design, Graphic
              Design, and Web development, I create engaging digital
              experiences.
            </h1>
            <h2>Haruka ISHIKAWA</h2>
            <p>Web Designer/ UX/UI Designer</p>
          </div>

          <img />
        </hero>
        <div className="hello_container">
          <img />
          <div className="hello">
            <p className="subTitle">HELLO</p>
            <p className="title">Take a little Look</p>
            <p className="description">
              Passionate Web Designer seeking new opportunities to create
              engaging user experiences and bring designs to life.
            </p>
            <Button text="Contact Me" onClick={handleAbout} />
          </div>
        </div>
        <div className="myService">
          <div className="myServiceBox">
            <img />
            <p className="title">Web Design</p>
            <p className="description">
              Web design is essential as it creates the first impression of your
              site, ensuring it is visually appealing and user-friendly, which
              builds credibility and encourages user engagement.
            </p>
          </div>
          <div className="myServiceBox">
            <img />
            <p className="title">Front-End Web Development</p>
            <p className="description">
              Front-end web development is crucial for ensuring that your
              website is responsive, interactive, and visually aligned with your
              brand. It optimizes the user experience by making the site easy to
              navigate and fast-loading.
            </p>
          </div>
          <div className="myServiceBox">
            <img />
            <p className="title">Graphic Design</p>
            <p className="description">
              Graphic design visually communicates your brand's message,
              enhancing the appeal of marketing materials and conveying
              professionalism, making your brand memorable and attractive in a
              competitive market.
            </p>
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
