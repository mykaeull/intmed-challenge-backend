import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  medico: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  dia: { type: String, required: true },
  horarios: [String],
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
export default Schedule;
