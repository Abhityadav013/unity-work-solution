import React, { useState } from "react";
import "./Navbar.css";
import {
  FaBars,
  FaRegUser,
  FaTimes,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { Button } from "antd";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src={`${process.env.PUBLIC_URL}/logo.jpg`} className="logo" alt="" />
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </li>
        <li
          onClick={() => setMenu("blog")}
          className={menu === "blog" ? "active" : ""}
        >
          Blog
        </li>
        {isMenuOpen && (
          <div className="social-links">
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              to="mailto:siddharth.yadav2093@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={30} />
            </Link>
          </div>
        )}
      </ul>

      {/* Overlay to blur the background when the menu is open */}
      <div
        className={`navbar-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      />

      <div className="navbar-right">
        <Button icon={<FaRegUser />} />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;
