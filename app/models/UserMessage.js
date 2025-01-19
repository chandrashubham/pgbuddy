import mongoose from "mongoose";

const UserMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const UserMessage =
  mongoose.models.UserMessage || mongoose.model("UserMessage", UserMessageSchema);

export default UserMessage;
