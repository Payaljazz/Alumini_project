import axios from "./axios";

export const getAchievements = (alumniId) =>
  axios.get(`/achievement/${alumniId}`);

export const addAchievement = (data) =>
  axios.post("/achievement", data);
