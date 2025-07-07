import React from "react";
import { Link } from "react-router-dom"; // ✅ Fixed import
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-bubble">
        <h1 className="landing-title">Welcome to CampusConnect</h1>
        <h3>Start your journey</h3>

        <Link to="/campuses" className="landing-link">
          Explore Campuses
        </Link>
        <Link to="/students" className="landing-link">
          Connect with Students
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
