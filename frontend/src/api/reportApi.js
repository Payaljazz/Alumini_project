import axios from "./axios";

export const getReports = () => axios.get("/reports");

export const createReport = (data) => axios.post("/reports", data);
