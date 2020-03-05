import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <span className="card-title">{project.title}</span>
      <p>Posted by the net</p>
      <span className="grey-text">30th Sep</span>
    </div>
  );
};

export default ProjectSummary;
