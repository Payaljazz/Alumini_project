import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json({ message: "Event created", event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("organizer participants");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const rsvpEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.participants.push(req.body.userId);
    await event.save();
    res.json({ message: "RSVP successful", event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};