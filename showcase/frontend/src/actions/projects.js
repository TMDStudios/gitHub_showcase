import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_PROJECTS, DELETE_PROJECT, ADD_PROJECT } from "./types";

// Get Projects
export const getProjects = () => (dispatch) => {
  axios
    .get("/api/projects/")
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
export const deleteProject = (id) => (dispatch) => {
  axios
    .delete(`/api/projects/${id}/`)
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
export const addProject = (project) => (dispatch) => {
  axios
    .post("/api/projects/", project)
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
