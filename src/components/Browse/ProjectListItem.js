import React from "react";
import { Link } from "react-router-dom";

import { GoDeviceDesktop } from "react-icons/go";
import { VscGithub } from "react-icons/vsc";

function ProjectListItem({ project }) {
  return (
    <div className="project-list-item">
      <img
        src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
        alt={project.name}
      />
      <div className="project-details">
        <h3>{project.name}</h3>
        <p className="tech-stack">
          {["React", "Redux", "Express", "HTML/CSS"]
            .map((t) => (
              <Link to="/" key={t}>
                #{t}
              </Link>
            ))
            .reduce((prev, curr) => [prev, ", ", curr])}
        </p>
        <p>{project.short_description}</p>
      </div>
      <div className="project-owner">
        <Link to={`/${project.url_slug}`}>{project.username}</Link>
      </div>
      <div className="project-comment-count">
        {project.comment_count} review{project.comment_count > 1 ? "s" : ""}
      </div>
      <div className="project-links">
        <a href={project.repo_url}>
          <VscGithub size={30} />
        </a>
        <a href={project.demo_url}>
          <GoDeviceDesktop size={30} />
        </a>
      </div>
    </div>
  );
}

export default ProjectListItem;
