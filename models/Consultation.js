import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
  dia: { type: String, required: true },
  horario: { type: String, required: true },
  data_agendamento: { type: String, required: true },
  medico: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
});

const Consultation = mongoose.model("Consultation", consultationSchema);
export default Consultation;
