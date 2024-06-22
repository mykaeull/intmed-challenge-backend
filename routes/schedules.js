import express from "express";
import Schedule from "../models/Schedule.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const schedules = await Schedule.find().populate("medico");
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.status(201).json(schedule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
