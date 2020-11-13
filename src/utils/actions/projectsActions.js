import { axiosWithAuth } from "../axiosWithAuth";

export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR";

export const fetchProjects = () => (dispatch) => {
  dispatch({ type: FETCH_PROJECTS_START });

  axiosWithAuth()
    .get("/projects")
    .then((response) => {
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: response.data });
    })
    .catch(() => {
      dispatch({ type: FETCH_PROJECTS_ERROR });
    });
};
