import React from "react";

import logo from "../../imgs/logo.png";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="navContainer">
          <div className="logoBox">
            <img src={logo} className="logo" alt="logo image"></img>
          </div>

          <div className="navLinks">
            <a href="#AboutMain">
              <p>About</p>
            </a>
            <a href="#portofolio">
              <p>Projects</p>
            </a>

            <a href="#contact">
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
