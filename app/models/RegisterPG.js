// models/RegisterPG.js
import mongoose from "mongoose";

const RegisterPGSchema = new mongoose.Schema(
  {
    ownerName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    pgDescription: { type: String, required: true },
    images: [{ type: String }], // store image URLs or filenames
    videos: [{ type: String }], // store video URLs or filenames
  },
  { timestamps: true }
);

const RegisterPG =
  mongoose.models.RegisterPG || mongoose.model("RegisterPG", RegisterPGSchema);

export default RegisterPG;
