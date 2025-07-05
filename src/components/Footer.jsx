import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
      <p>
        <a href="/privacy" className="footer-link">Privacy Policy</a> |{" "}
        <a href="/terms" className="footer-link">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
