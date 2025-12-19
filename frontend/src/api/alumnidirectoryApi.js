import axios from "axios";

// ✅ PUBLIC ALUMNI DIRECTORY
export const getAllAlumni = () => {
  return axios.get("http://localhost:5000/api/alumni/directory");
};
