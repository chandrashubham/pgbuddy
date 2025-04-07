// models/BookNow.js
import mongoose from "mongoose";

const BookNowSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    moveInDate: { type: Date, required: true },
    preferredPG: { type: String, required: true },
  },
  { timestamps: true }
);

const BookPG =
  mongoose.models.BookNow || mongoose.model("BookNow", BookNowSchema);

export default BookPG;
