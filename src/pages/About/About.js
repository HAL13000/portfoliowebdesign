import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import pic002 from "../../images/pics/pic002.png";

const About = () => {
  const handleToGithub = () => {
    window.open("https://github.com/HAL13000", "_blank");
  };
  const handleToLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/haruka-ishikawa-795685232/",
      "_blank"
    );
  };
  return (
    <div className="about">
      <Header />
      {/* <div className="hero">
        <p>
          Web Design, Web Development, Graphic Design, all for your creative
          needs
        </p>
      </div> */}
      <main>
        <div className="aboutMe">
          <img src={pic002} loading="lazy" />
          <div className="aboutMeContainer">
            <p className="title">ABOUT</p>
            <p className="description">
              Hello, I'm Haruka.
              <br />
              As there is a word “book-worm” for those who like to read, I would
              like to call myself “creative-worm”.
              <br />
              <br />
              I have a deep love for all kinds of creative activities and find
              joy in transforming ideas into tangible works.
              <br />
              Whether it's cooking, painting, writing, crafting, or engaging in
              design work, each serves as a precious tool of expression for me.
              <br />
              <br />
              Why Web design?
              <br />
              <br />
              Web design is enjoyable because it's like crafting a visual story
              on a blank canvas. Starting with a single idea, endless
              possibilities unfold. Each design choice I make transforms into a
              functional and aesthetically pleasing website or application that
              people can use. This process fills me with satisfaction and
              excitement.
            </p>
          </div>
        </div>
        <div className="contact">
          <div className="itemContainer">
            <p className="title">CONTACT</p>
            <div className="itemBox">
              <p className="item">harukaishikawa8000@gmail.com</p>
            </div>
            <div className="itemBox">
              <button className="navigateBtn" onClick={handleToLinkedIn}>
                → Linked In
              </button>
              <button className="navigateBtn" onClick={handleToGithub}>
                → Github
              </button>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="itemContainer">
            <p className="title">SKILLS</p>
            <div className="itemBox">
              <p className="item">Web Design</p>
              <p className="item">UX / UI Design</p>
              <p className="item">Web Development Front-end</p>
            </div>
            <div className="itemBox">
              <p className="item">Iconography & Illustration</p>
              <p className="item">Print & Editorial Logo Design</p>
              <p className="item">Logo Design</p>
            </div>
          </div>
        </div>
        <div className="languages">
          <div className="itemContainer">
            <p className="title">LANGUAGES/TOOLS</p>
            <div className="itemBox">
              <p className="item">Figma</p>
              <p className="item">Procreate</p>
              <p className="item">ClipStudio</p>
              <p className="item">Adobe PhotoShop</p>
              <p className="item">Adobe Illustrator</p>
            </div>

            <div className="itemBox">
              <p className="item">HTML/CSS</p>
              <p className="item">Sass</p>
              <p className="item">Javascript</p>
              <p className="item">React.js</p>
            </div>
            <div className="itemBox">
              <p className="item">English </p>
              <p className="item">French</p>
              <p className="item">Japanese</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
