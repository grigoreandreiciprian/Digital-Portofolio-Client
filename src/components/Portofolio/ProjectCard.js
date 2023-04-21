import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { Alerts } from "../../context/alert";

export const Projects = ({ project, deleteProject }) => {
  const [hideCard, setHideCard] = useState("false");
  const [picture, setPicture] = useState();
  const navigate = useNavigate();
  const [alert, setAlert] = useContext(Alerts);

  const toggleCard = () => {
    if (hideCard === "false") {
      setHideCard("true");
    } else if (hideCard === "true") {
      setHideCard("false");
    }
  };

  function toBase64(arr) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  useEffect(() => {
    if (project !== undefined) {
      if (project.picture != null && project.picture != 0) {
        setPicture(`data:image/png;base64,${toBase64(project.picture.data)}`);
      }
    }
  }, [project]);

  return (
    <>
      {(() => {
        if (project !== undefined) {
          return (
            <>
              <div className="projectCard">
                {(() => {
                  if (hideCard === "false") {
                    return (
                      <>
                        <div className="settings">
                          <i
                            className="fa-solid fa-gear"
                            onClick={() => {
                              navigate(`/update/${project.id}`);
                              setAlert([]);
                            }}
                          ></i>
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => {
                              deleteProject(project.id);
                            }}
                          ></i>
                        </div>
                        <Card project={project} toggleCard={toggleCard} />;
                      </>
                    );
                  } else if (hideCard === "true") {
                    return (
                      <button
                        className="projectBtn"
                        onClick={() => {
                          setHideCard("false");
                        }}
                      >
                        Show project
                      </button>
                    );
                  }
                })()}
              </div>
            </>
          );
        }
      })()}
    </>
  );
};

export default Projects;
