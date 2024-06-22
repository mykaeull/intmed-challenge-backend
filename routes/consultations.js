import express from "express";
import Consultation from "../models/Consultation.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find().populate("medico");
    res.json(consultations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const consultation = new Consultation(req.body);
    await consultation.save();
    res.status(201).json(consultation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndDelete(req.params.id);
    if (!consultation)
      return res.status(404).json({ error: "Consulta not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
