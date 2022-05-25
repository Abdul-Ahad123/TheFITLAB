import React from "react";
import "./AboutUs.css";
import img from "../../images/about.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
     <Navbar/>
     <br/> <br/> <br/> <br/> <br/>
     <div className="container workOut">
      <div className="row">
        <div className="col-md-6 aboutImage">
          <img src={img} alt="" />
        </div>
        <div className="col-md-6 about-right">
          <h1>About Us</h1>
          <h2>
            <span className="text-warning">OUR TEAM IS HERE SURVE YOU.</span> <br />
          </h2>
          <p>
            We strive to help you learn and improve through our shared content,
            or we offer personalized online training sessions for more in
            customized results. Our goal is to help you achieve the healthy
            physique that is best suited to your personal goals and lifestyle.
            We provide a dedicated, professional, and friendly environment that
            is designed to support your every need.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
