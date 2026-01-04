// src/components/Header/Header.jsx
import React from "react";
import "./Header.css";
import { FaSearch, FaRegMoon, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* LEFT SIDE */}
      <div className="header-left">
        <FaSearch className="header-icon" />
      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">
        <img
          src="https://flagcdn.com/w40/us.png"
          alt="US Flag"
          className="flag"
        />

        <FaRegMoon className="header-icon" />
        <FaBell className="header-icon" />

        <div className="profile-wrapper">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="profile-img"
          />
          <span className="online-dot"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
