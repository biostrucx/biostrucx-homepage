import React from "react";
import "../index.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">BioStrucX</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#mission">Our Mission</a>
        <a href="#design">BioStruct Design</a>
        <div className="dropdown">
          <button className="dropbtn">More ▼</button>
          <div className="dropdown-content">
            <a href="#careers">Careers</a>
            <a href="#supplier">Be a Supplier</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
