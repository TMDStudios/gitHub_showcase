import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_PROJECTS, DELETE_PROJECT, ADD_PROJECT } from "./types";

// Get Projects
export const getProjects = () => (dispatch, getState) => {
  axios
    .get("/api/projects/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PROJECTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Project
export const deleteProject = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/projects/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteProject: "Project Deleted" }));
      dispatch({
        type: DELETE_PROJECT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add Project
export const addProject = (project) => (dispatch, getState) => {
  axios
    .post("/api/projects/", project, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addProject: "Project Added" }));
      dispatch({
        type: ADD_PROJECT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
