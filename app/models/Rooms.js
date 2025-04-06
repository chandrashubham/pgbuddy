import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    // slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    sharingType: { type: String, enum: ["Single", "Double", "Triple", "Dormitory"], required: true },
    type: { type: String, enum: ["Boys", "Girls", "Unisex"], required: true },
    status: { type: String, enum: ["Available", "Occupied", "Coming Soon"], default: "Available" },
    image: { type: String },
    gallery: [{ type: String }],
    location: { type: String, required: true },
    address: { type: String, required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    amenities: [
      {
        type: String,
        enum: [
          "WiFi",
          "AC",
          "Laundry",
          "Power Backup",
          "CCTV",
          "Security Guard",
          "Attached Bathroom",
          "Geyser",
          "Parking",
          "Food Included",
          "Fridge",
          "TV",
        ],
      },
    ],
    rules: {
      smokingAllowed: { type: Boolean, default: false },
      drinkingAllowed: { type: Boolean, default: false },
      visitorsAllowed: { type: Boolean, default: false },
      curfewTime: { type: String },
    },
    owner: {
      name: { type: String },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
