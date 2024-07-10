import React from "react";
import Header from "../../components/Header/Header";
import SlideShow from "../../components/SlideShow/SlideShow";
import Footer from "../../components/Footer/Footer";
import "./test.scss";

const TestPage = () => {
  return (
    <div className="test">
      <Header />
      <main style={{ paddingTop: "100px", overflow: "hideen" }}>
        This is Test page
        {/* <SlideShow /> */}
        {/* <div className="box_try">
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
        </div> */}
        <div className="manyBox">
          <div className="lBox">
            <p>ABC</p>
          </div>
          <div className="lBox">
            <p>ABC</p>
          </div>
          <div className="lBox">
            <p>ABC</p>
          </div>
          <div className="lBoxRed">
            <p>ABC</p>
          </div>
          <div className="lBox">
            <p>ABC</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestPage;
