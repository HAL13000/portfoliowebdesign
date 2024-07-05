import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="hero">
        <p>
          Web Design, Web Development, Graphic Design, all for your creative
          needs
        </p>
      </div>
      <main>
        <div className="aboutMe">
          <img />
          <div className="aboutMe_container">
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
        <div className="skills">
          <p className="title">SKILLS</p>
          <p className="description">
            Web design UX / UI Design Front-end web developpement Iconography &
            Illustration Print & Editorial Logo Design
          </p>
        </div>
        <div className="languages">
          <p className="title">LANGUAGES/TOOLS</p>
          <p className="description">
            Figma Procreate Clipstudio Adobe -Photoshop -Illustrator
          </p>
          <p className="description">HTML/CSS Sass Javascript React.js</p>
          <p className="description">English French Japanese</p>
        </div>
        <div className="contact">
          <p className="title">CONACT</p>
          <p className="description">harukaishikawa8000@gmail.com</p>
          <button className="navigateBtn">→ Linked In</button>
          <button className="navigateBtn">→ Github</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
