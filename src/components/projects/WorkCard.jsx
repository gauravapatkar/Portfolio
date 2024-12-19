import React from "react";
import { NavLink } from "react-router-dom";
import "./project.css";
const WorkCard = (props) => {
  return (
    <div className="VidSec">
      <video
        src={props.videosrc}
        width="550px"
        height="300px"
        controls="controls"
        autoplay="true"
      />
      <aside className="projectDetail">
        <p className="projectDetailH">
          <span className="ProDescH">
            {props.title} <span className="titleName">{props.titleName}</span>
          </span>
        </p>
        <div className="Viewbtn">
          <a href={props.view} target="_blank">
            View Project
          </a>
        </div>
        <p className="projectDetailH">
          <span>
            <h1 className="ProDescH"> Project description:-</h1>
            <p className="ProDesc"> {props.Text} </p>
          </span>
        </p>
      </aside>
    </div>
  );
};

export default WorkCard;
