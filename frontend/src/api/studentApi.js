import api from "./axios";

/* Get logged-in student profile */
export const getMyStudentProfile = () => {
  return api.get("/student/me");
};

/* Create student profile */
export const createStudentProfile = (data) => {
  return api.post("/student", data);
};

/* Get all students */
export const getAllStudents = () => {
  return api.get("/student");
};
