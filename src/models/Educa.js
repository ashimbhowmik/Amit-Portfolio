import mongoose from "mongoose";

const EducaSchema = new mongoose.Schema(
  {
    degree: String,
    year: String,
    college: String,
    samary2: String,
  },
  { timestamps: true }
);

const Educa = mongoose.models.Educa || mongoose.model("Educa", EducaSchema);

export default Educa;
