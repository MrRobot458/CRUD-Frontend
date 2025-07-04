import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-bubble">
        <h1 className="landing-title">Welcome to CampusConnect</h1>
        <p>Explore campuses. Connect with students. Start your journey.</p>
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
