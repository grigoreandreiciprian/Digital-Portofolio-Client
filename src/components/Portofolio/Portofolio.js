import React, { useContext, useEffect, useState } from "react";
import ProjectsCard from "./ProjectCard";
import { Alerts } from "../../context/alert";
import Data from "../../Api";
import { useNavigate } from "react-router-dom";

const Portofolio = () => {
  const api = new Data();
  const [alert, setAlert] = useContext(Alerts);
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    let projects = await api.getProjects();

    setProjects(projects.projects);
  };

  const toAdd = () => {
    navigate("/add");
  };

  const deleteProject = async (id) => {
    await api.deleteProject(id);

    getProjects();
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div id="portofolio">
      <h2>Check out my portofolio</h2>
      <h3>Here's what I have done with the past</h3>
      <div className="projectCards">
        {projects.length > 0 ? (
          projects.map((e) => {
            return (
              <ProjectsCard
                project={e}
                key={e.id}
                deleteProject={deleteProject}
              />
            );
          })
        ) : (
          <p>You dont have projects at the moment</p>
        )}
        <ProjectsCard />

        <button
          className="projectBtn add"
          onClick={() => {
            toAdd();
            setAlert([]);
          }}
        >
          Add new project
        </button>
      </div>
    </div>
  );
};

export default Portofolio;
