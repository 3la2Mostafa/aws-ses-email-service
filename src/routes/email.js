import { Router } from "express";
import { sendEmail } from "../services/emailService.js";

const router = Router();

router.post("/send", async (req, res) => {
  const { to, subject, body } = req.body;
  const result = await sendEmail({ to, subject, body });
  res.status(200).json({ messageId: result.MessageId });
});

export default router;
