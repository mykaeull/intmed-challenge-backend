import mongoose from "mongoose";

const specialitySchema = new mongoose.Schema({
  nome: { type: String, required: true },
});

const Speciality = mongoose.model("Speciality", specialitySchema);
export default Speciality;
