import express from "express";
import Doctor from "../models/Doctor.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("especialidade");
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
