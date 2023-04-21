import React from "react";
import onlineSchool from "../../imgs/OnlineSchool.png";

export const Card = ({ project, toggleCard }) => {
  return (
    <>
      <div className="hideCard">
        <i
          className="fa-sharp fa-solid fa-square-minus"
          onClick={toggleCard}
        ></i>
      </div>

      <div className="imgBox">
        <img src={onlineSchool} alt="projectimg" className="projectImg"></img>
      </div>

      <div className="projectDescription">
        <h6>{project.category}</h6>
        <h5>{project.title}</h5>
        <a href={project.link}>
          <div className="projectBtn">
            VIEW PROJECT
            <span id="span4"></span>
          </div>
        </a>
      </div>
    </>
  );
};
