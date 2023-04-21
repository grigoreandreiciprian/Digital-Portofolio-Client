import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alerts } from "../../context/alert";
import AddProjectBody from "./AddProjectBody";
import Data from "../../Api";
import PhotoData from "../../PhotoApi";

const AddProjectMain = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [link, setLink] = useState("");
  const [picture, setPicture] = useState("");
  const [project, setProject] = useState("");
  const [alert, setAlert] = useContext(Alerts);
  const [err, setErr] = useState([]);
  const api = new Data();
  const photoApi = new PhotoData();

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

  const addProject = async () => {
    check();
    if (err == "") {
      await api.addProject({
        title,
        category,
        link,
      });

      setAlert("Project added succefuly");

      navigate("/");
    } else {
      setAlert(err);
    }
  };

  useEffect(() => {
    check();
    setAlert(err);
  }, [title, link, picture, category]);

  return (
    <section className="formContainer">
      <div className="formBox">
        <AddProjectBody handleChanger={handleChanger} addProject={addProject} />
      </div>
    </section>
  );
};

export default AddProjectMain;
