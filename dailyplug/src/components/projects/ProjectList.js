import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectList project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
