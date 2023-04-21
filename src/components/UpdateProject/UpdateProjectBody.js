import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { FileUploader } from "react-drag-drop-files";
import { Alerts } from "../../context/alert";
import { useNavigate } from "react-router-dom";

const UpdateProjectBody = ({ handleChanger, updateProject, project }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(project.title);
  const [category, setCategory] = useState(project.category);
  const [link, setLink] = useState();
  const [picture, setPicture] = useState(project.picture);
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [alert, setAlert] = useContext(Alerts);

  const onChange = (e) => {
    let obj = e.target;

    if (obj.classList.contains("title")) {
      setTitle(obj.value);
    } else if (obj.classList.contains("category")) {
      setCategory(obj.value);
    } else if (obj.classList.contains("link")) {
      setLink(obj.value);
    }
  };

  const pictureHandle = async (file) => {
    let buufer = await file.arrayBuffer();

    setPicture(buufer);
  };

  useEffect(() => {
    handleChanger(title, category, link, picture);
  }, [title, picture, category, link]);

  return (
    <div className="formBody" onChange={onChange}>
      <div className="formImg">
        <div className="shadowOverlay">
          <h1 className="mb-8 text-3xl text-center">Update your project</h1>
        </div>
      </div>

      <div className="selectBox">
        <h4>Select project category</h4>
        <select className="category">
          <option disabled>Project category</option>
          <option>Web design</option>
          <option>Software design</option>
          <option>Web app</option>
        </select>
      </div>

      <input
        type="text"
        className="title"
        name="title"
        placeholder="Project title"
        defaultValue={project.title}
      />

      <input
        type="text"
        className="link"
        name="link"
        placeholder="Project link"
        defaultValue={project.link}
      ></input>
      <div className="input">
        <h4>Project picture</h4>
        <FileUploader
          name="file"
          types={fileTypes}
          handleChange={pictureHandle}
        />
      </div>

      <div className="buttons">
        <button className="projectBtn" onClick={updateProject}>
          Update Project
          <span id="span4"></span>
        </button>

        <button
          className="projectBtn2"
          onClick={() => {
            navigate("/");
            setAlert([]);
          }}
        >
          Cancel
          <span id="span4"></span>
        </button>
      </div>

      <div className="alertBox">
        {alert.length > 0 ? (
          alert.map((e) => {
            return (
              <div className="alertMsg" key={e}>
                <span className="block sm:inline">{e}</span>
                {/* <span className="close">x</span> */}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UpdateProjectBody;
