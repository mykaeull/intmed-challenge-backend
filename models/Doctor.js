import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  crm: { type: Number, required: true, unique: true },
  nome: { type: String, required: true },
  especialidade: { type: mongoose.Schema.Types.ObjectId, ref: "Speciality" },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
