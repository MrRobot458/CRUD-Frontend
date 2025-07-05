import React from "react";
import "./LandingPage.css";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-bubble">
        <h1 className="landing-title">Welcome to CampusConnect</h1>
        <h3>Start your journey</h3>
        <Link to="/campuses">
          <p>Explore campuses</p>
        </Link>
        <Link to="/students">
          <p>Connect with students</p>
        </Link>
      </div>

      <div className="left-align-wrapper">
        <p className="transparent-bubble">
          Start by exploring our campus directory or meeting the students!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
