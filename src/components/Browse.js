import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProjects } from "../utils/actions/projectsActions";

import ProjectList from "./Browse/ProjectList";
import Error from "./Error";
import Spinner from "./Spinner";

function Browse() {
  const state = useSelector((state) => state.projects);
  const { data: projects, loading, error } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="browse">
      <div className="browse-width-wrapper">
        {loading ? (
          <Spinner size={50} />
        ) : error ? (
          <Error
            iconSize={50}
            type="error"
            message="Error occured while fetching projects."
          />
        ) : (
          <ProjectList projects={projects} />
        )}
      </div>
    </div>
  );
}

export default Browse;
