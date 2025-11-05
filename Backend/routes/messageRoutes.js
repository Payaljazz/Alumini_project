import express from "express";
import {
  sendMessage,
  getAllMessages
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/", sendMessage);
router.get("/", getAllMessages);

export default router;
