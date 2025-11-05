import express from "express";
import {
  createEvent,
  getAllEvents,
  rsvpEvent
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.post("/:id/rsvp", rsvpEvent);

export default router;
