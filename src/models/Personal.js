import mongoose from "mongoose";

const PersonalSchema = new mongoose.Schema(
  {
    name: String,
    age: String,
    nationality: String,
    work: String,
    adress: String,
    phone: String,
    email: String,
    github: String,
    linkdn: String,
    language: String,
  },
  { timestamps: true }
);

const Personal =
  mongoose.models.Personal || mongoose.model("Personal", PersonalSchema);

export default Personal;
