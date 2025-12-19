import axios from "./axios";

export const getJobs = () =>
  axios.get("/jobs");
