import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userPhoto: {
      type: String,
    },
    userIsVerified: {
      type: Boolean,
    },
    userRole: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.user || mongoose.model("user", userSchema);
