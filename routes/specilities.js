import express from "express";
import Speciality from "../models/Speciality.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const specialities = await Speciality.find();
  res.json(specialities);
});

router.post("/", async (req, res) => {
  const speciality = new Speciality(req.body);
  await speciality.save();
  res.status(201).json(speciality);
});

export default router;
