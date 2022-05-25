import React from "react";
import "./Header.css";
import bgdVideo from "../../images/vid/gymshark.mp4";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="hero-container">
        <video autoPlay loop muted className="hero-video">
          <source src={bgdVideo} />
        </video>
        <div className="hero-content">
          <h1>Make yourself stronger than your excuses.</h1>
          <h2>Workouts to elevate your fitness training</h2>
          <Link to="/register">
            <button className="btn btn-outline-light">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
