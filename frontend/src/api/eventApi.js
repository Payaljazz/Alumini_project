import axios from "./axios";

export const getEvents = () => axios.get("/events");

export const rsvpEvent = (eventId) =>
  axios.post(`/events/${eventId}/rsvp`);
