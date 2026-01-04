// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2024, Made with <span className="heart">❤</span> by{" "}
        <span className="brand">Pixinvent</span>
      </div>

      <div className="footer-right">
        <a href="#">License</a>
        <a href="#">More Themes</a>
        <a href="#">Documentation</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
