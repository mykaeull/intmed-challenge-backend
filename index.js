import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import specialitiesRoutes from "./routes/specilities.js";
import doctorsRoutes from "./routes/doctors.js";
import schedulesRoutes from "./routes/schedules.js";
import consultationsRoutes from "./routes/consultations.js";
import { verifyToken } from "./middleware/auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/users", authRoutes);
app.use("/specialities", verifyToken, specialitiesRoutes);
app.use("/doctors", verifyToken, doctorsRoutes);
app.use("/schedules", verifyToken, schedulesRoutes);
app.use("/consultations", verifyToken, consultationsRoutes);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
