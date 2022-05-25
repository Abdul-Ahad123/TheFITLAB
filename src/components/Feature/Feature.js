import React from "react";
import Featurebox from "./Featurebox";
import fimg1 from "../../images/1.svg";
import fimg2 from "../../images/2.svg";
import fimg3 from "../../images/3.svg";
import fimg4 from "../../images/4.svg";
import "./Feature.css";

import Navbar from "../Navbar/Navbar";

export default function Feature() {
  return (
    <div>
      <Navbar/>
      <div id="features">
        <h1>Features</h1>
        <div className="a-container">
          <Featurebox image={fimg1} title="Weight Lifting" />
          <Featurebox image={fimg2} title="Specific Muscle" />
          <Featurebox image={fimg3} title="Flex Your Muscle" />
          <Featurebox image={fimg4} title="Cardio Exercise" />
        </div>
      </div>
    </div>
  );
}
