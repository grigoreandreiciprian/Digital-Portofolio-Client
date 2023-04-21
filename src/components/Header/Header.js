import React, { useContext } from "react";

import Nav from "./Nav";
import Intro from "./Intro";

import profilePic from "../../imgs/profile.jpg";
import { Alerts } from "../../context/alert";

const Header = () => {
  const [alert, setAlert] = useContext(Alerts);

  console.log(alert);

  const closeAlert = () => {
    setAlert([]);
  };
  return (
    <div className="headerBox">
      <div className="headerShadow">
        <Nav />;
      </div>
      <div className="introContainer">
        <div className="introContent">
          <div className="profilePic">
            <img src={profilePic}></img>
          </div>

          <Intro />
        </div>
      </div>

      {(() => {
        if (alert.length > 0) {
          return (
            <div className="alertMsg">
              <span className="block sm:inline">{alert}</span>
              <span className="close" onClick={closeAlert}>
                x
              </span>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Header;
