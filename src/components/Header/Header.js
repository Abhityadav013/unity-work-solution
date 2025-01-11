import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-video">
        <video autoPlay loop muted>
          <source src="/assets/videos/home_background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="header-contents">
        <h1>Empowering Your Career Journey</h1>
        <span>Expert guidance in visa, admissions, and job placement</span>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
