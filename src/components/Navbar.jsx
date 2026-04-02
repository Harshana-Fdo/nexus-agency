import React from "react";
import './Navbar.css';

function Navbar() {

return(
<nav className="navbar">
      <div className="logo">NEXUS<span>DIGITAL</span></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
    </nav>
)
;
}

export default Navbar;
