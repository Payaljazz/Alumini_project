import axios from "./axios";

// logged-in alumni ka profile
export const getMyAlumniProfile = () => {
  return axios.get("/alumni/me");
};

export const updateMyAlumniProfile = (data) => {
  return axios.put("/alumni/me", data);
};

