import React from "react";
import "./project.css";
import ProjectCradData from "./ProjectCradData";
import WorkCard from "./WorkCard";

const Project = (props) => {
  return (
    <section id="project">
      <h2 className="projectTitle"> My Portfolio</h2>
      <span className="projectDesc">
        I take pride in paying attention to the samllest details and making sure
        that my work is pixel perfect. i am excited to bring my skills and
        experience to help businesses achieve theit goals and create a strong
        online presence.
      </span>

      <div className="workVids">
        {ProjectCradData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              title={value.title}
              titleName={value.titleName}
              Text={value.Text}
              view={value.view}
              videosrc={value.videosrc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
