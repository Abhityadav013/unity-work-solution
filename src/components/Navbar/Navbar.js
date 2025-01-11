import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaRegUser, FaTimes } from "react-icons/fa";
import { Button } from "antd";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleMenu = () => {
    setSidebarVisible(!sidebarVisible);
    setIsMenuOpen(!isMenuOpen);
  };

  console.log('sidebarVisible>>>>',sidebarVisible)
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
      </ul>

      {/* Overlay to blur the background when the menu is open */}
      <div className={`navbar-overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} />

      <div className="navbar-right">
        <Button icon={<FaRegUser />} />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {sidebarVisible ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;
