import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ message: "Message sent", data: message });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .populate("sender receiver", "name email");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
