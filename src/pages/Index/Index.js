import React from "react";
import "./Index.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  return (
    <div className="index">
      <Header />
      Index
      <div className="box_try">
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
      </div>
      <Footer />
    </div>
  );
};

export default Index;
