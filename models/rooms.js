import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Room title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Room description is required"],
      trim: true,
    },

    capacity: {
      type: String,
      enum: ["small", "medium", "large"],
      required: [true, "Room capacity is required"],
    },

    totalGuestCapacity: {
      type: Number,
      required: [true, "Total guest capacity is required"],
      min: [1, "Total guest capacity must be at least 1"],
    },

    totalRooms: {
      type: Number,
      required: [true, "Total rooms is required"],
      min: [1, "There must be at least 1 room"],
    },

    regularPrice: {
      type: Number,
      required: [true, "Regular price is required"],
      min: [0, "Regular price cannot be negative"],
    },

    discountedPrice: {
      type: Number,
      min: [0, "Discounted price cannot be negative"],
      default: 0,
    },

    isDiscountApplicable: {
      type: Boolean,
      default: false,
    },

    amenities: {
      type: [String],
      default: [],
    },

    location: {
      type: String,
      required: [true, "Room location is required"],
      trim: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    checkInTime: {
      type: String,
      default: "12:00 PM",
    },

    checkOutTime: {
      type: String,
      default: "11:00 AM",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
