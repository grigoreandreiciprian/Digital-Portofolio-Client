import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alerts } from "../../context/alert";
import UpdateProjectBody from "./UpdateProjectBody";
import Data from "../../Api";
import PhotoData from "../../PhotoApi";

const AddProjectMain = () => {
  const navigate = useNavigate();
  const api = new Data();
  const photoApi = new PhotoData();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [link, setLink] = useState("");
  const [picture, setPicture] = useState("");
  const [project, setProject] = useState("");
  const [alert, setAlert] = useContext(Alerts);
  const [err, setErr] = useState([]);

  let id = useParams().projectid;

  const findProject = async () => {
    const projectfound = await api.findOne(id);

    setProject(projectfound.project);
  };

  const handleChanger = (title, category, link, picture) => {
    setTitle(title);
    setCategory(category);
    setLink(link);
    setPicture(picture);
  };

  const check = () => {
    setErr("");

    if (title == "") {
      setErr((prev) => {
        return [...prev, "Project title is required"];
      });
    }

    if (link == "") {
      setErr((prev) => {
        return [...prev, "Project link is required"];
      });
    }
  };

  const updateProject = async () => {
    check();
    if (err == "") {
      await api.updateProject(id, { title, category, link, picture });

      setAlert("Project updated succesfuly");
      navigate("/");
    } else {
      setAlert(err);
    }
  };

  useEffect(() => {
    check();
    setAlert(err);
  }, [title, link, picture, category]);

  useEffect(() => {
    findProject();
  }, []);

  return (
    <section className="formContainer">
      <div className="formBox">
        <UpdateProjectBody
          handleChanger={handleChanger}
          updateProject={updateProject}
          project={project}
        />
      </div>
    </section>
  );
};

export default AddProjectMain;
