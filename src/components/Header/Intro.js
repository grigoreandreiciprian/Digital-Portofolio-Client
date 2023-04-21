import React from "react";

const Intro = () => {
  return (
    <div className="introBox">
      <h1>Hello I'm Grigore Andrei</h1>

      <div className="socialBox">
        <div className="conect">
          <p>Lets conect</p>
          <div className="arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className="socialIcons">
          <a href="https://www.facebook.com/grigore.ciprian.35">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ciiprian_grigore/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/andrei-ciprian-grigore-a68a21251/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/grigoreandreiciprian?tab=repositories">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
