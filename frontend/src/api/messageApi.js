import axios from "./axios";

export const getMessages = () => axios.get("/messages");

export const sendMessage = (data) => axios.post("/messages", data);

export const markAsRead = (id) => axios.put(`/messages/${id}/read`);
