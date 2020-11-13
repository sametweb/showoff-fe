import React from "react";

import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
