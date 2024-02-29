import mongoose from "mongoose";

const ProSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    website: String,
    technologies: String,
    github: String,
    samary: String,
  },
  { timestamps: true }
);

const Pro = mongoose.models.Pro || mongoose.model("Pro", ProSchema);

export default Pro;
