import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../GRAPPLTECH.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="logo" src={logo}></img>
      </div>
      <ul className="nav-links">
        <a>
          <li>Home</li>
        </a>
        <a>
          <li>BootCamps</li>
        </a>
        <a>
          <li>Community</li>
        </a>
        <a>
          <li>Workshops & Hackathons</li>
        </a>
        <a>
          <li>Resume Maker</li>
        </a>
        <a>
          <li>Contact</li>
        </a>
       
      </ul>
    </nav>
  );
};
export default Navbar;
